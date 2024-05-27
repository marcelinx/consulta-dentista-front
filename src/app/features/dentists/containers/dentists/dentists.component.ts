import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Dentista } from '../../model/dentista';
import { DentistService } from '../../services/dentist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss'],
})
export class DentistsComponent {
  dentistaData$: Observable<Dentista[]> | null = null;

  constructor(
    private dentistaService: DentistService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  refresh() {
    this.dentistaData$ = this.dentistaService.list().pipe(
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

  onEdit(dentist: Dentista) {
    this.router.navigate(['edit', dentist.id], { relativeTo: this.route });
  }

  onDelete(dentist: Dentista) {
    this.dentistaService.remove(dentist.id).subscribe(() => {
      this.refresh();
      this.snackBar.open('Dentista excluído com sucesso', 'X', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    },
    error => this.onError('Profissional já atrelado a uma consulta. Altere ou tente mais tarde')
    );
  }
}
