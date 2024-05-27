import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Agenda } from '../../model/agenda';
import { AgendaService } from '../../services/agenda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {
  agendaData$: Observable<Agenda[]> | null = null;

  constructor(
    private agendaService: AgendaService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.agendaData$ = this.agendaService.list().pipe(
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

  onEdit(agenda: Agenda) {
    this.router.navigate(['edit', agenda.id], { relativeTo: this.route });
  }

  onDelete(agenda: Agenda) {
    this.agendaService.remove(String(agenda.id)).subscribe(() => {
      this.refresh();
      this.snackBar.open('Agenda excluída com sucesso', 'X', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    },
    error => this.onError('Erro ao excluir agenda. Por favor, tente novamente mais tarde.')
    );
  }
}
