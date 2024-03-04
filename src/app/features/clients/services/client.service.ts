import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take } from 'rxjs';

import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly API = 'consultorio/clientes';

  constructor(private httpClient: HttpClient) {}

  listClient() {
    return this.httpClient.get<Cliente[]>(this.API).pipe(take(1));
  }

  loadById(id: string) {
    return this.httpClient.get<Cliente>(`${this.API}/${id}`);
  }

  saveClient(record: Cliente) {
    console.log(record);
    if (record._id) {
      console.log('update');
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  private create(record: Partial<Cliente>) {
    return this.httpClient.post<Cliente>(this.API, record).pipe(first());
  }

  private update(record: Partial<Cliente>) {
    return this.httpClient
      .put<Cliente>(`${this.API}/${record._id}`, record)
      .pipe(first());
  }
}
