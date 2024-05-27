import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Cliente } from '../model/cliente';
import { ClienteService } from '../services/client.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteResolver {
  constructor(private service: ClienteService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Cliente> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']).pipe(
        catchError(error => {
          console.error('Error loading client:', error);
          return of(this.getEmptyCliente()); // Returning an empty client object
        })
      );
    } else {
      // Returning a dummy client object with formatted birth date
      return of(this.getEmptyCliente());
    }
  }

  private formatarDataNascimento(data: string): string {
    if (!data) return '';

    const partesData = data.split('-').reverse();

    return partesData.join('/');
  }

  private getEmptyCliente(): Cliente {
    return {
      id: '',
      nome: '',
      email: '',
      telefone: '',
      dataNascimento: '',
      sexo: '',
      endereco: '',
      dataNascimentoFormatada: this.formatarDataNascimento('')
    };
  }
}
