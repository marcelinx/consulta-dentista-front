import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { Agenda } from '../model/agenda';
import { Cliente } from '../../clients/model/cliente'
import { Dentista } from '../../dentists/model/dentista';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private readonly API = '/consultorio/agendas';
  private readonly APIClientes = '/consultorio/clientes';
  private readonly APIDentistas = '/consultorio/colaboradores';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Agenda[]> {
    return this.httpClient.get<Agenda[]>(this.API).pipe(take(1));
  }

  loadById(id: string): Observable<Agenda> {
    return this.httpClient.get<Agenda>(`${this.API}/${id}`).pipe(take(1));
  }

  saveAgenda(record: Partial<Agenda>): Observable<Agenda> {
    if (record.id) {
      return this.update(record as Agenda);
    } else {
      return this.create(record as Agenda);
    }
  }

  remove(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.API}/${id}`).pipe(take(1));
  }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.APIClientes).pipe(take(1));
  }

  getDentistas(): Observable<Dentista[]> {
    return this.httpClient.get<Dentista[]>(this.APIDentistas).pipe(take(1));
  }

  private create(record: Agenda): Observable<Agenda> {
    return this.httpClient.post<Agenda>(this.API, record).pipe(take(1));
  }

  private update(record: Agenda): Observable<Agenda> {
    return this.httpClient.put<Agenda>(`${this.API}/${record.id}`, record).pipe(take(1));
  }
}
