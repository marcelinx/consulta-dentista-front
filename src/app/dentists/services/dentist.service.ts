import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Dentista } from '../model/dentista';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DentistService {
  private readonly API = '/assets/dentistaas.json';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient
      .get<Dentista[]>(this.API)
      .pipe(
        take(1),
        delay(5000),
        tap((dentists) => console.log(dentists)));
  }
}
