import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Cliente } from '../../../clients/model/cliente';
import { Dentista } from '../../../dentists/model/dentista';
import { Agenda } from '../../model/agenda';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: ['./agenda-form.component.scss'],
})
export class AgendaFormComponent {
  form: FormGroup;
  clientes: Cliente[] = [];
  dentistas: Dentista[] = [];
  agenda: Agenda | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private agendaService: AgendaService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      date: ['', [Validators.required ]],
      cliente: ['', Validators.required],
      dentista: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  this.route.data.subscribe((data) => {
    this.agenda = data['agenda'];
    if (this.agenda) {
      this.form.patchValue(this.agenda);
    }
  });

  this.agendaService.getClientes().subscribe(clientes => {
    this.clientes = clientes || [];
  });

  this.agendaService.getDentistas().subscribe(dentistas => {
    this.dentistas = dentistas || [];
  });
}


  onSubmit() {
    if (this.form.valid) {
      const formValue = this.form.value;

      const clienteSelecionado: Cliente = {
        id: formValue.cliente.id,
        nome: formValue.cliente.nome,
        email: formValue.cliente.email,
        telefone: formValue.cliente.telefone,
        dataNascimento: formValue.cliente.dataNascimento,
        sexo: formValue.cliente.sexo,
        endereco: formValue.cliente.endereco,
        dataNascimentoFormatada: formValue.cliente.dataNascimentoFormatada
      };

      const dentistaSelecionado: Dentista = {
        id: formValue.dentista.id,
        nome: formValue.dentista.name,
        category: formValue.dentista.category,
        cro: formValue.dentista.cro,
        endereco: formValue.dentista.endereco,
        telefone: formValue.dentista.telefone
      };

      const payload: Agenda = {
        id: formValue.id,
        date: formValue.date,
        cliente: clienteSelecionado,
        dentista: dentistaSelecionado
      };
      this.agendaService.saveAgenda(payload).subscribe(
        () => this.onSuccess(),
        (error) => this.onError(error)
      );
    } else {
      this.snackBar.open('Por favor, corrija os erros antes de enviar.', '', {
        duration: 5000,
      });
    }
  }

  compareCliente(c1: Cliente, c2: Cliente): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareDentista(d1: Dentista, d2: Dentista): boolean {
    return d1 && d2 ? d1.id === d2.id : d1 === d2;
  }


  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Agenda salva com sucesso!', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  private onError(error: any) {
    console.error('Erro ao salvar agenda:', error); // Adicionar log para depuração
    this.dialog.open(ErrorDialogComponent, {
      data: 'Erro ao salvar a agenda',
    });
  }
}
