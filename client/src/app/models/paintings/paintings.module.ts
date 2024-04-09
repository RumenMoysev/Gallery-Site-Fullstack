import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingsListComponent } from './paintings-list/paintings-list.component';
import { AddPaintingComponent } from './add-painting/add-painting.component';
import { PaintingDetailsComponent } from './painting-details/painting-details.component';
import { ImageUrlDirective } from './directives/image-url-directive.directive';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditPaintingComponent } from './edit-painting/edit-painting.component';
import { CutTextPipe } from 'src/app/pipes/cut-text-pipe.pipe';

@NgModule({
  declarations: [
    PaintingsListComponent,
    AddPaintingComponent,
    PaintingDetailsComponent,
    ImageUrlDirective,
    EditPaintingComponent,
    CutTextPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaintingsModule { }
