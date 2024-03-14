import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingsListComponent } from './models/paintings/paintings-list/paintings-list.component';

const routes: Routes = [];
    { path: 'gallery', component: PaintingsListComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
