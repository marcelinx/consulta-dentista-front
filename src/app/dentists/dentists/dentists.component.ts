import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Dentista } from '../model/dentista';
import { DentistService } from '../services/dentist.service';

@Component({
  selector: 'app-dentists',
  templateUrl: './dentists.component.html',
  styleUrls: ['./dentists.component.scss'],
})
export class DentistsComponent {
  dentistaData$: Observable<Dentista[]>;
  displayedColumns = ['name', 'category'];

  constructor(
    private dentistService: DentistService,
    public dialog: MatDialog
  ) {
    this.dentistaData$ = this.dentistService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao encontrar Colaboradores.')
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {}
}
