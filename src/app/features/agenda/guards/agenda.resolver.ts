// agenda.resolver.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AgendaService } from '../services/agenda.service';
import { Agenda } from '../model/agenda';

@Injectable({
  providedIn: 'root',
})
export class AgendaResolver implements Resolve<Agenda> {
  constructor(private service: AgendaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Agenda> {
    const agendaId = route.params['id'];
    if (agendaId) {
      return this.service.loadById(agendaId).pipe(
        catchError(() => {
          console.error('Erro ao carregar agenda');
          return of({
            id: '',
            cliente: 0,
            dentista: 0,
            date: ''
          } as unknown as Agenda); // Converter para 'unknown' primeiro
        })
      );
    } else {
      // Retornar um objeto vazio de Agenda se não houver ID
      return of({
        id: '',
        cliente: 0,
        dentista: 0,
        date: ''
      } as unknown as Agenda); // Converter para 'unknown' primeiro
    }
  }
}
