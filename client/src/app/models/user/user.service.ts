import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from 'src/app/types/user';

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnDestroy{
    private user$$ = new BehaviorSubject<User | undefined>(undefined)
    private user$ = this.user$$.asObservable()

    user: User | undefined;

    userSubscription: Subscription

    constructor(private http: HttpClient) {
        this.userSubscription = this.user$.subscribe((user) => {
            this.user = user
        })
    }

    get isLoggedIn(): boolean {
        return this.user ? true : false
    }

    get userId(): string | undefined {
        return this.user?.userId
    }

    get isAdmin(): boolean {
        if(this.user?.role === 'admin') {
            return true
        } else {
            return false
        }
    }

    register(email: string, username: string, password: string, repeatPassword: string) {
        return this.http.post<User>('api/users/register', { email, username, password, repeatPassword }).pipe(tap((user) => this.user$$.next(user)))
    }

    login(email: string, username: string, password: string) {
        return this.http.post<User>('api/users/login', { email, username, password }).pipe(tap((user) => this.user$$.next(user)))
    }

    getUser() {
        return this.http.get<User>('api/users/getUser').pipe(tap((user) => this.user$$.next(user)))
    }

    logout() {
        this.user$$.next(undefined)
        return this.http.post('api/users/logout', {})
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe()
    }
}
