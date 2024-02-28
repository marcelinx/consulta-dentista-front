import { Component } from '@angular/core';
import { Dentista } from '../model/dentista';
import { DentistService } from '../services/dentist.service';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss']
})
export class DentistsComponent {

  dentista: Dentista[] = [];
  displayedColumns = ['name', 'category'];

  constructor(private dentistService: DentistService) {}

  ngOnInit(): void {
    this.dentista = this.dentistService.list();
  }
}
