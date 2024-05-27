import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DentistService } from '../../services/dentist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Dentista } from '../../model/dentista';
import { nameValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-dentist-form',
  templateUrl: './dentist-form.component.html',
  styleUrls: ['./dentist-form.component.scss'],
})
export class DentistFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: DentistService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, nameValidator()]],
      category: ['', Validators.required],
      cro: [''],
      endereco: [''],
      telefone: ['']
    });
  }

  ngOnInit(): void {
    const dentista: Dentista = this.route.snapshot.data['dentista'];
    this.form.patchValue(dentista);
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.saveDentist(this.form.value).subscribe(
        (result) => this.onSuccess(),
        (error) => this.onError()
      );
    } else {
      this.snackBar.open('Por favor, corrija os erros antes de enviar.', '', {
        duration: 5000,
      });
    }
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
