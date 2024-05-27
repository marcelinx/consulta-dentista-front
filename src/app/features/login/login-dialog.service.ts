import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {

  constructor(private dialog: MatDialog) {}

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
