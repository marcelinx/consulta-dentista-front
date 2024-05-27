import { Cliente } from '../../clients/model/cliente';
import { Dentista } from '../../dentists/model/dentista';

export interface Consulta {
  id: string;
  hora: string;
  cliente: Cliente;
  dentista: Dentista;
  agenda: {
    id: string;
    date: string;
    cliente: Cliente;
    dentista: Dentista;
  };
}
