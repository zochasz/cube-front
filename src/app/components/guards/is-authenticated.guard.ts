import { AuthService } from './../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
      private authService: AuthService,
      private router: Router
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isAuthenticated()) {
              return true;
            } else {
              this.router.navigate(['login']);
              return false;
            }
        }
  }
