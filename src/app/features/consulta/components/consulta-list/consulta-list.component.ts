import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsultaHistoryModalComponent } from '../consulta-history-modal/consulta-history-modal.component';
import { Consulta } from '../../model/consulta';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.scss'],
})
export class ConsultaListComponent {
  @Input() consultas: Consulta[] = [];
  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Consulta>();
  @Output() remove = new EventEmitter<Consulta>();

  readonly displayedColumns = ['hora', 'cliente', 'dentista', 'data', 'actions'];
  dataSource: MatTableDataSource<Consulta>;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Consulta>([]);
  }

  ngOnChanges() {
    this.dataSource.data = this.consultas;
  }

  onAdd() {
    this.add.emit();
  }

  onEdit(consulta: Consulta) {
    this.edit.emit(consulta);
  }

  onDelete(consulta: Consulta) {
    this.remove.emit(consulta);
  }

  openHistoryModal(consulta: Consulta): void {
    this.dialog.open(ConsultaHistoryModalComponent, {
      width: '400px',
      data: consulta,
    });
  }

  applyFilter(event: any) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }
}
