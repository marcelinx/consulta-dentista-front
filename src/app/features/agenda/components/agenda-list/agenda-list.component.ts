import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agenda } from '../../model/agenda';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss']
})
export class AgendaListComponent {
  @Input() agendas: Agenda[] = [];
  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Agenda>();
  @Output() remove = new EventEmitter<Agenda>();

  readonly displayedColumns = ['date', 'dentista', 'actions'];
  dataSource: MatTableDataSource<Agenda>;

  constructor() {
    this.dataSource = new MatTableDataSource<Agenda>([]);
  }

  ngOnChanges() {
    this.dataSource.data = this.agendas;
  }

  onAdd() {
    this.add.emit();
  }

  onEdit(agenda: Agenda) {
    this.edit.emit(agenda);
  }

  onDelete(agenda: Agenda) {
    this.remove.emit(agenda);
  }

  applyFilter(event: any) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }
}
