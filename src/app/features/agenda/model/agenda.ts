import { Cliente } from '../../clients/model/cliente';
import { Dentista } from '../../dentists/model/dentista';

export interface Agenda {
  id: string;
  date: string;
  cliente: Cliente;
  dentista: Dentista;
}
