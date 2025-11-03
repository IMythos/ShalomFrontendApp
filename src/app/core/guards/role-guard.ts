import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  const requiredRoles = route.data['roles'] as string[];

  if (!authService.isAuthenticated()) {
    return router.createUrlTree(['client/login']);
  }

  const userRole = authService.getUserRole();

  if (userRole && requiredRoles && requiredRoles.includes(userRole)) {
    return true;
  } else {
    console.warn(`Acceso denegado. Rol: ${userRole}. Requerido: ${requiredRoles?.join(', ')}`);
    return router.createUrlTree(['/unauthorized']);
  }
};
