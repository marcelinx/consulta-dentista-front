import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dentista } from '../../model/dentista';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dentist-list',
  templateUrl: './dentist-list.component.html',
  styleUrls: ['./dentist-list.component.scss'],
})
export class DentistListComponent {
  @Input() dentistas: Dentista[] = [];
  @Output() add = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Dentista>();
  @Output() remove = new EventEmitter<Dentista>();

  readonly displayedColumns = ['name', 'category', 'cro', 'endereco', 'telefone', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onAdd() {
    this.add.emit();
  }

  onEdit(dentista: Dentista) {
    this.edit.emit(dentista);
  }

  onDelete(dentista: Dentista) {
    this.remove.emit(dentista);
  }
}
