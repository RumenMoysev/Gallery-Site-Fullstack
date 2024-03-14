import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './models/user/login/login.component';
import { RegisterComponent } from './models/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PaintingsListComponent } from './models/paintings/paintings-list/paintings-list.component';
import { AddPaintingComponent } from './models/paintings/add-painting/add-painting.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery', component: PaintingsListComponent},
    { path: 'add-painting', component: AddPaintingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
