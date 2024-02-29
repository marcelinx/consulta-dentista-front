import { Component } from '@angular/core';
import { Dentista } from '../model/dentista';
import { DentistService } from '../services/dentist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss']
})
export class DentistsComponent {

  dentistaData$: Observable<Dentista[]>;
  displayedColumns = ['name', 'category'];

  constructor(private dentistService: DentistService) {
    this.dentistaData$ = this.dentistService.list();
  }

  ngOnInit(): void {

  }
}
