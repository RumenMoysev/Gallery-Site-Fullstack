import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    checked: boolean = false

    constructor(private userService: UserService, private router: Router) {}

    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn
    }

    get isAdmin(): boolean {
        return this.userService.isAdmin
    }

    ngOnInit(): void {
        if (document.cookie.includes('userId=')) {
            this.userService.getUser().subscribe()
        }
    }

    check(): void {
        this.checked = !this.checked
    }

    logout(): void {
        this.userService.logout().subscribe()
        this.router.navigate(['/'])
    }
}
