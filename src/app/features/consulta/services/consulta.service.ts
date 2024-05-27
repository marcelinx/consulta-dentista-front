import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

import { Consulta } from '../model/consulta';
import { Cliente } from '../../clients/model/cliente'
import { Dentista } from '../../dentists/model/dentista';

@Injectable({
  providedIn: 'root',
})
export class ConsultaService {
  private readonly API = '/consultorio/consultas';
  private readonly APIClientes = '/consultorio/clientes';
  private readonly APIDentistas = '/consultorio/colaboradores';

  constructor(private httpClient: HttpClient) {}

  list(): Observable<Consulta[]> {
    return this.httpClient.get<Consulta[]>(this.API).pipe(take(1));
  }

  loadById(id: string): Observable<Consulta> {
    return this.httpClient.get<Consulta>(`${this.API}/${id}`);
  }

  saveConsulta(record: Consulta): Observable<Consulta> {
    if (record.id) {
      return this.update(record);
    } else {
      return this.create(record);
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

  private create(record: Partial<Consulta>): Observable<Consulta> {
    return this.httpClient.post<Consulta>(this.API, record).pipe(take(1));
  }

  private update(record: Partial<Consulta>): Observable<Consulta> {
    return this.httpClient.put<Consulta>(`${this.API}/${record.id}`, record).pipe(take(1));
  }
}
