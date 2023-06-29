import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    let Role = localStorage.getItem('role');
    if (Role == 'Admin') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
