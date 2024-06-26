import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Dentista } from '../model/dentista';
import { DentistService } from '../services/dentist.service';

@Injectable({
  providedIn: 'root',
})
export class DentistaResolver {
  constructor(private service: DentistService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Dentista> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ id: '', nome: '', category: '', cro: '', endereco: '', telefone: '' });
  }
}
