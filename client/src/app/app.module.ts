import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './models/core/header/header.component';;
import { HomeComponent } from './components/home/home.component';
import { UserModule } from './models/user/user.module';
import { PaintingsModule } from './models/paintings/paintings.module';
import { appInterceptorProvider } from './app.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ProfileComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        UserModule,
        PaintingsModule,
        AppRoutingModule
    ],
    providers: [appInterceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule { }
