import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
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
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  onSubmit() {
    if (this.authService.login(this.email, this.password)) {
      this.dialogRef.close();
      this.router.navigate(['/dentists']);
    } else {
      alert('Email ou senha inválidos.');
    }
  }
}
