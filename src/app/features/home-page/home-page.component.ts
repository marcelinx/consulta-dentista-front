import { Component } from '@angular/core';
import { LoginDialogService } from '../login/login-dialog.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private loginDialogService: LoginDialogService) {}

  openLogin() {
    this.loginDialogService.openLoginDialog();
  }
}
