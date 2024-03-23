import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn
    }

    constructor(private userService: UserService) { }

    
}
