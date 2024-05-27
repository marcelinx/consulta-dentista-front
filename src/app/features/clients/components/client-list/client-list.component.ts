import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../../model/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  @Input() cliente: Cliente[] = [];
  @Output() add = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<Cliente>();
  @Output() remove = new EventEmitter<Cliente>();

  readonly displayedColumns = ['nome', 'email', 'telefone', 'dataNascimento', 'sexo', 'endereco', 'actions'];
  dataSource: MatTableDataSource<Cliente>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource<Cliente>([]);
  }

  ngOnChanges() {
    this.dataSource.data = this.cliente;
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(cliente: Cliente) {
    this.edit.emit(cliente);
  }

  onDelete(cliente: Cliente) {
    this.remove.emit(cliente);
  }

  applyFilter(event: any) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }
}
