import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ConsultaService } from '../services/consulta.service';
import { Consulta } from '../model/consulta';

@Injectable({
  providedIn: 'root',
})
export class ConsultaResolver implements Resolve<Consulta> {
  constructor(private service: ConsultaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Consulta> {
    const consultaId = route.params['id'];
    if (consultaId) {
      return this.service.loadById(consultaId).pipe(
        catchError(() => {
          console.error('Erro ao carregar consulta');
          return of({
            id: '',
            hora: '',
            cliente: {
              id: '',
              nome: '',
              email: '',
              telefone: '',
              dataNascimento: '',
              sexo: '',
              endereco: '',
              dataNascimentoFormatada: '' // Certifique-se de incluir a propriedade dataNascimentoFormatada
            },
            dentista: {
              id: '',
              nome: '',
              category: '',
              cro: '',
              endereco: '',
              telefone: ''
            },
            agenda: {
              id: '',
              date: '', // Certifique-se de incluir a propriedade date
              cliente: {
                id: '',
                nome: '',
                email: '',
                telefone: '',
                dataNascimento: '',
                sexo: '',
                endereco: '',
                dataNascimentoFormatada: ''
              },
              dentista: {
                id: '',
                nome: '',
                category: '',
                cro: '',
                endereco: '',
                telefone: ''
              }
            }
          });
        })
      );
    } else {
      return of({
        id: '',
        hora: '',
        cliente: {
          id: '',
          nome: '',
          email: '',
          telefone: '',
          dataNascimento: '',
          sexo: '',
          endereco: '',
          dataNascimentoFormatada: '',
        },
        dentista: {
          id: '',
          nome: '',
          category: '',
          cro: '',
          endereco: '',
          telefone: ''
        },
        agenda: {
          id: '',
          date: '',
          cliente: {
            id: '',
            nome: '',
            email: '',
            telefone: '',
            dataNascimento: '',
            sexo: '',
            endereco: '',
            dataNascimentoFormatada: ''
          },
          dentista: {
            id: '',
            nome: '',
            category: '',
            cro: '',
            endereco: '',
            telefone: ''
          }
        }
      });
    }
  }
}
