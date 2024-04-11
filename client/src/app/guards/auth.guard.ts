import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../models/user/user.service';
import { lastValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async () => {
  const userService = inject(UserService)
  const router = inject(Router)
  await waitForAuth(userService)

  return userService.isLoggedIn ? true : router.navigate(['/login'])
};

export const unauthGuard: CanActivateFn = async () => {
  const userService = inject(UserService)
  const router = inject(Router)
  await waitForAuth(userService)

  return userService.isLoggedIn ? router.navigate(['/']) : true
};

const waitForAuth = (userService: any): any => {
  if (!userService.isLoggedIn && document.cookie.includes('userId=')) {
    return lastValueFrom(userService.getUser())
  }
}