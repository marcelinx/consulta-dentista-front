import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Consulta } from '../../model/consulta';

@Component({
  selector: 'app-consulta-history-modal',
  templateUrl: './consulta-history-modal.component.html',
  styleUrls: ['./consulta-history-modal.component.scss'],
})
export class ConsultaHistoryModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConsultaHistoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public consulta: Consulta
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
