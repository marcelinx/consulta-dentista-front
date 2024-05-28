import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Cliente } from '../../../clients/model/cliente';
import { Dentista } from '../../../dentists/model/dentista';
import { ConsultaService } from '../../services/consulta.service';
import { AgendaService } from '../../../agenda/services/agenda.service';
import { Consulta } from '../../model/consulta';
import { Agenda } from '../../../agenda/model/agenda';
import { Location } from '@angular/common';

@Component({
  selector: 'app-consulta-form',
  templateUrl: './consulta-form.component.html',
  styleUrls: ['./consulta-form.component.scss']
})
export class ConsultaFormComponent implements OnInit {
  form: FormGroup;
  clientes: Cliente[] = [];
  dentistas: Dentista[] = [];
  datasDisponiveis: Agenda[] = []; // Alterado para manter as agendas completas

  constructor(
    private formBuilder: FormBuilder,
    private consultaService: ConsultaService,
    private location: Location,
    private agendaService: AgendaService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      hora: [''],
      cliente: [''],
      dentista: [''],
      data: ['']
    });
  }

  ngOnInit(): void {
    // Carregar clientes e dentistas
    this.consultaService.getClientes().subscribe(clientes => {
      this.clientes = clientes || [];
      if (clientes && clientes.length > 0) {
        this.form.get('cliente')?.setValue(clientes[0]);
      }
    });

    this.consultaService.getDentistas().subscribe(dentistas => {
      this.dentistas = dentistas || [];
      if (dentistas && dentistas.length > 0) {
        this.form.get('dentista')?.setValue(dentistas[0]);
      }
    });

    const horaPadrao = '09:00';
    this.form.get('hora')?.setValue(horaPadrao);

    // Carregar datas disponíveis
    this.carregarDatasDisponiveis();
  }

  onSubmit() {
    if (this.form.valid) {
      const horaSelecionada = this.form.get('hora')?.value;
      const horaInicio = '08:00';
      const horaFim = '18:00';

      if (this.isHoraValida(horaSelecionada, horaInicio, horaFim)) {
        const consultaData: Consulta = {
          id: '',
          hora: horaSelecionada,
          cliente: this.form.get('cliente')?.value,
          dentista: this.form.get('dentista')?.value,
          agenda: {
            id: this.form.get('data')?.value.id,
            date: this.form.get('data')?.value.date,
            cliente: this.form.get('data')?.value.cliente,
            dentista: this.form.get('data')?.value.dentista
          }
        };

        this.consultaService.saveConsulta(consultaData).subscribe(
          () => {
            this.snackBar.open('Consulta agendada com sucesso!', '', {
              duration: 5000,
            });
            this.form.reset();
          },
          (error: any) => {
            this.snackBar.open('Erro ao agendar consulta. Por favor, tente novamente.', '', {
              duration: 5000,
            });
          }
        );
      } else {
        this.snackBar.open('Por favor, selecione uma hora entre 08:00 e 18:00.', '', {
          duration: 5000,
        });
      }
    } else {
      this.snackBar.open('Por favor, preencha todos os campos obrigatórios.', '', {
        duration: 5000,
      });
    }
  }

  isHoraValida(hora: string, inicio: string, fim: string): boolean {
    const horaInicio = new Date('2000-01-01T' + inicio);
    const horaFim = new Date('2000-01-01T' + fim);
    const horaSelecionada = new Date('2000-01-01T' + hora);

    return horaSelecionada >= horaInicio && horaSelecionada <= horaFim;
  }

  carregarDatasDisponiveis() {
    this.agendaService.list().subscribe(agendas => {
      this.datasDisponiveis = agendas;
    });
  }
  onCancel() {
    this.location.back();
  }
}
