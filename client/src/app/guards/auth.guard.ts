import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../models/user/user.service';

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService)
  const router = inject(Router)

  return userService.isLoggedIn ? true : router.navigate(['/login'])
};

