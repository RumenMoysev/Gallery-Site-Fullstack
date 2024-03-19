import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PasswordDirective } from './directives/password.directive';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PasswordDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
