import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';

@NgModule({
  declarations: [
    PaintingsListComponent,
    AddPaintingComponent,
    PaintingDetailsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PaintingsModule { }
