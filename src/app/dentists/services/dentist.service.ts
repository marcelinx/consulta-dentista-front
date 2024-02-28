import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dentista } from '../model/dentista';

@Injectable({
  providedIn: 'root',
})
export class DentistService {


  constructor(private httpClient: HttpClient) {}

  list(): Dentista[] {
    return [
      {
        _id: '1',
        name: 'João Marcelino',
        specialty: 'Ortodontia',
      },
    ];
  }
}
