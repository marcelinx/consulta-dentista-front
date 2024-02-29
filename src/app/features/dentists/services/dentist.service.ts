import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take } from 'rxjs';

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
    console.log(record);
    if (record._id) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }

  remove(id: string) {
    return this.httpClient
      .delete(`${this.API}/${id}`)
      .pipe(first());
  }

  private create(record: Partial<Dentista>) {
    return this.httpClient.post<Dentista>(this.API, record).pipe(first());
  }

  private update(record: Partial<Dentista>) {
    return this.httpClient
      .put<Dentista>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
