import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const userRoles = userService.user$()?.roles;
  const hasPermission = userRoles?.includes("ADMIN")
  console.log("ADMIN ROLE GUARD", userRoles, hasPermission);

  if(userService.user$() && hasPermission) {
    return true;
  } else {
    return router.navigate(['restricted-content']);
  }

  
};
