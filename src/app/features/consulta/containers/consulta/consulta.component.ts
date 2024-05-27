import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Consulta } from '../../model/consulta';
import { ConsultaService } from '../../services/consulta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  consultaData$: Observable<Consulta[]> | null = null;

  constructor(
    private consultaService: ConsultaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.consultaData$ = this.consultaService.list().pipe(
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

  onEdit(consulta: Consulta) {
    this.router.navigate(['edit', consulta.id], { relativeTo: this.route });
  }

  onDelete(consulta: Consulta) {
    this.consultaService.remove(consulta.id).subscribe(() => {
      this.refresh();
      this.snackBar.open('Consulta excluída com sucesso', 'X', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    },
    error => this.onError('Erro ao excluir consulta. Por favor, tente novamente mais tarde.')
    );
  }
}
