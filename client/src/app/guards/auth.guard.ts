import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../models/user/user.service';
import { lastValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async () => {
  const userService = inject(UserService)
  const router = inject(Router)


  if (!userService.isLoggedIn && document.cookie.includes('userId=')) {
    console.log('gg')
    await lastValueFrom(userService.getUser())
  }

  return userService.isLoggedIn ? true : router.navigate(['/login'])
};

export const unauthGuard: CanActivateFn = () => {
  const userService = inject(UserService)

  return userService.isLoggedIn ? false : true
};