import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './models/user/login/login.component';
import { HeaderComponent } from './models/core/header/header.component';
import { RegisterComponent } from './models/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PaintingsListComponent } from './models/paintings/paintings-list/paintings-list.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        RegisterComponent,
        HomeComponent,
        PaintingsListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
