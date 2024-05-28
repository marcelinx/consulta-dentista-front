import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Consulta } from '../../model/consulta';
import { Dentista } from 'src/app/features/dentists/model/dentista';
import { Agenda } from 'src/app/features/agenda/model/agenda';

@Component({
  selector: 'app-consulta-history-modal',
  templateUrl: './consulta-history-modal.component.html',
  styleUrls: ['./consulta-history-modal.component.scss'],
})
export class ConsultaHistoryModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConsultaHistoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public consulta: Consulta,
    @Inject(MAT_DIALOG_DATA) public dentista: Dentista,
    @Inject(MAT_DIALOG_DATA) public agenda: Agenda,
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
