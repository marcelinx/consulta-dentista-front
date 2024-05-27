import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(email: string, password: string): boolean {
    if (email === 'admin@dentevida.com' && password === 'admin') {
      this.loggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
