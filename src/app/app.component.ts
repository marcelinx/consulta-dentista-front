import { Component } from '@angular/core';
import { LoginDialogService } from './features/login/login-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dent&Vida';
  
  constructor(private loginDialogService: LoginDialogService) {}

  openLogin() {
    this.loginDialogService.openLoginDialog();
  }
}
