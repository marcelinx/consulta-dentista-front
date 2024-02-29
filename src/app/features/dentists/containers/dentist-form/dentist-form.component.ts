import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { DentistService } from '../../services/dentist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Dentista } from '../../model/dentista';

@Component({
  selector: 'app-dentist-form',
  templateUrl: './dentist-form.component.html',
  styleUrls: ['./dentist-form.component.scss'],
})
export class DentistFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: DentistService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      _id: [''],
      name: [''],
      specialty: [''],
    });
  }

  ngOnInit(): void {
    const dentista: Dentista = this.route.snapshot.data['dentista'];
    this.form.setValue({
      _id: dentista._id,
      name: dentista.name,
      specialty: dentista.specialty,
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
    this.snackBar.open('Profissional salvo com sucesso!', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar profissional!', '', {
      duration: 5000,
    });
  }
}
