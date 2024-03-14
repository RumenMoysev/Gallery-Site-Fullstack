import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './models/user/login/login.component';
import { RegisterComponent } from './models/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PaintingsListComponent } from './models/paintings/paintings-list/paintings-list.component';
import { AddPaintingComponent } from './models/paintings/add-painting/add-painting.component';
import { PaintingDetailsComponent } from './models/paintings/painting-details/painting-details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery',
        children: [
            { path: '', pathMatch: 'full', component: PaintingsListComponent },
            { path: ':themeId', component: PaintingDetailsComponent }
        ]
    },
    { path: 'add-painting', component: AddPaintingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
