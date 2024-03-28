import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaintingsService } from '../paintings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-painting',
  templateUrl: './add-painting.component.html',
  styleUrls: ['./add-painting.component.css']
})
export class AddPaintingComponent {
  constructor(private paintingsService: PaintingsService, private router: Router) {}

  addPainting(form: NgForm) {
    if(form.valid) {
      this.paintingsService.addPainting(form.value.paintingTitle, form.value.summary, form.value.description, form.value.imageUrl).subscribe()
      this.router.navigate(['/gallery'])
    }
  }
}
