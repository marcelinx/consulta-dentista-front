import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialogRef: MatDialogRef<LoginComponent>,
    private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    if (this.authService.login(this.email, this.password)) {
      this.dialogRef.close();
      this.router.navigate(['/consultas']);
    } else {
      this.snackBar.open('Email ou senha inválidos.', 'Fechar', {
        duration: 3000,
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
