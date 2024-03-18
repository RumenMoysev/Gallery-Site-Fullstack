import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EmailDirectiveDirective } from './directives/email-directive.directive';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    EmailDirectiveDirective
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
