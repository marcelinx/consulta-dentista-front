import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor() {
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

  applyFilter(event: any) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }
}
