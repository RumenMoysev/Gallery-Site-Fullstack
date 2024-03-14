import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './models/user/login/login.component';
import { HeaderComponent } from './models/core/header/header.component';
import { RegisterComponent } from './models/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PaintingsListComponent } from './models/paintings/paintings-list/paintings-list.component';
import { AddPaintingComponent } from './models/paintings/add-painting/add-painting.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        RegisterComponent,
        HomeComponent,
        PaintingsListComponent,
        AddPaintingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }