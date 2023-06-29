import { LoginProcessService } from './services/login-process.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _loginService: LoginProcessService,
    private router: Router
  ) {}

  canActivate(): boolean {
    let Role = localStorage.getItem('role');
    if (this._loginService.LoggedIn() && Role == 'Doctor') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
