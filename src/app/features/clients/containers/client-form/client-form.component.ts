import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ClienteService } from '../../services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClienteService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      _id: [''],
      name: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
    const dentista: Cliente = this.route.snapshot.data['dentista'];
    this.form.setValue({
      _id: dentista._id,
      name: dentista.name,
      email: dentista.email,
    });
  }

  onSubmit() {
    this.service.saveDentist(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Cliente salvo com sucesso!', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar cliente!', '', {
      duration: 5000,
    });
  }
}