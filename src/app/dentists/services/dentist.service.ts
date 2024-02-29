import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

import { Dentista } from '../model/dentista';

@Injectable({
  providedIn: 'root',
})
export class DentistService {
  private readonly API = 'consultorio/colaboradores';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Dentista[]>(this.API).pipe(take(1));
  }

  loadById(id: string) {
    return this.httpClient.get<Dentista>(`${this.API}/${id}`);
  }

  saveDentist(record: Dentista) {
    return this.httpClient.post<Dentista>(this.API, record);
  }
}
