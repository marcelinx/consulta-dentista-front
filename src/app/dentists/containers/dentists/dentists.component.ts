import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  dentistaData$: Observable<Dentista[]>;

  constructor(
    private dentistService: DentistService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dentistaData$ = this.dentistService.list().pipe(
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

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(dentista: Dentista) {
    this.router.navigate(['edit', dentista._id], { relativeTo: this.route });
  }
}
