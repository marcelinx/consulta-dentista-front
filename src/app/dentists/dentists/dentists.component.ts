import { Component } from '@angular/core';
import { Dentista } from '../model/dentista';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss']
})
export class DentistsComponent {

  dentista: Dentista[] = [
    {
      _id: '1',
      name: 'João Marcelino',
      specialty: 'Ortodontia',
    },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
