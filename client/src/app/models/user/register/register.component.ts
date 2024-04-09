import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    errorMsg: string | undefined

    constructor(private userService: UserService, private router: Router) {}

    register(form: NgForm): void {
        if (form.valid) {
            const {email, username, passwords: {password, repeatPassword}} = form.value
            this.userService.register(email, username, password, repeatPassword).subscribe({
                next: () => this.router.navigate(['/']),
                error: (err) => this.errorMsg = err.error.message
            })
        }
    }
}
