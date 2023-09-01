import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService)
  let isAuth;
  authService.isAuth.asObservable().subscribe((auth:boolean) => isAuth = auth)

  if(isAuth) return true;
  return false;
};
