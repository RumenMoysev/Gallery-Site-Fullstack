import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn
    }

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        if (document.cookie.includes('userId=')) {
            this.userService.getUser().subscribe()
        }
    }
}
