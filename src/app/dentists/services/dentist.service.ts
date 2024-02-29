import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dentista } from '../model/dentista';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DentistService {
  private readonly API = '/assets/dentistas.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Dentista[]>(this.API)
      .pipe(
        first(),
        tap((dentists) => console.log(dentists)));
  }
}
