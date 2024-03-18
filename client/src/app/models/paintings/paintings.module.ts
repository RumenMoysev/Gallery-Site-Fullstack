import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';
import { ImageUrlDirective } from './directives/image-url-directive.directive';

@NgModule({
  declarations: [
    PaintingsListComponent,
    AddPaintingComponent,
    PaintingDetailsComponent,
    ImageUrlDirective
  ],
  imports: [
    CommonModule,
  ]
})
export class PaintingsModule { }
