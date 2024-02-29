import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dentista } from '../../model/dentista';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dentist-list',
  templateUrl: './dentist-list.component.html',
  styleUrls: ['./dentist-list.component.scss'],
})
export class DentistListComponent {
  @Input() dentista: Dentista[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['name', 'specialty', 'actions'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(dentista: Dentista) {
    this.edit.emit(dentista);
  }
}
