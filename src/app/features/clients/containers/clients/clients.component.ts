import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientComponent {
  clientData$: Observable<Cliente[]> | null = null;

  constructor(
    private clienteService: ClienteService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.clientData$ = this.clienteService.listClient().pipe(
      catchError((error) => {
        this.onError('Ocorreu um erro ao carregar conteúdo');
        return of([]);
      })
    );
  }


  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(cliente: Cliente) {
    this.router.navigate(['edit', cliente.id], { relativeTo: this.route });
  }

  onDelete(cliente: Cliente) {
    this.clienteService.remove(cliente.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Cliente excluído com sucesso', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      },
      (error) => this.onError('Erro ao tentar excluir cliente!')
    );
  }
  onViewGraph() {
    this.router.navigate(['data'], { relativeTo: this.route });
  }
}
