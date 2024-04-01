import { Component, OnInit } from '@angular/core';
import { PaintingsService } from '../paintings.service';
import { paintingDetails } from 'src/app/types/painting';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-edit-painting',
    templateUrl: './edit-painting.component.html',
    styleUrls: ['./edit-painting.component.css']
})
export class EditPaintingComponent implements OnInit{
    paintingDetails: paintingDetails | undefined

    constructor(private paintingsService: PaintingsService, private activatedRoute: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((data) => this.getPaingingDetails(data['paintingId']))
    }

    getPaingingDetails(paintingId: string) {
        this.paintingsService.getPaintingsDetails(paintingId).subscribe(paintingDetails => this.paintingDetails = paintingDetails as paintingDetails)
    }

    editPainting(form: NgForm) {
        if (form.valid) {
            this.paintingsService.editPainting(form.value.paintingTitle, form.value.summary, form.value.description, form.value.imageUrl, this.paintingDetails?._id).subscribe(data => this.router.navigate(['/gallery']))
        }
    }
}
