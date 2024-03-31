import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaintingsService } from '../paintings.service';
import { paintingDetails } from 'src/app/types/painting';
import { tap } from 'rxjs';

@Component({
    selector: 'app-painting-details',
    templateUrl: './painting-details.component.html',
    styleUrls: ['./painting-details.component.css']
})

export class PaintingDetailsComponent implements OnInit {
    paintingDetails: paintingDetails | undefined

    constructor(
        private activatedRoute: ActivatedRoute,
        private paintingsService: PaintingsService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(data => this.getPaintingDetails(data['paintingId']))
    }

    getPaintingDetails(paintingId: string) {
        this.paintingsService.getPaintingsDetails(paintingId).pipe(tap(details => this.paintingDetails = details as paintingDetails)).subscribe()
    }
}