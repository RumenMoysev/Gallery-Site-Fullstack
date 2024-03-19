import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PasswordDirective } from './directives/password.directive';
import { EmailDirective } from './directives/email.directive';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PasswordDirective,
    EmailDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
