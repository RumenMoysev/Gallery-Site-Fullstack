import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private userService: UserService, private router: Router) {}

    login(form: NgForm): void {
        if(form.valid) {
            const {email, username, password} = form.value
            this.userService.login(email, username, password).subscribe(() => this.router.navigate(['/']))
        }
    }
}
