import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { AddPaintingComponent } from './add-painting/add-painting.component';



@NgModule({
  declarations: [
    PaintingsListComponent,
    AddPaintingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaintingsModule { }
