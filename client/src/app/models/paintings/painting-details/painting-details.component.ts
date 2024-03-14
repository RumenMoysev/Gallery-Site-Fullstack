import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-painting-details',
    templateUrl: './painting-details.component.html',
    styleUrls: ['./painting-details.component.css']
})

export class PaintingDetailsComponent implements OnInit {
    themeId: String = ''

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(data => {
            this.themeId = data['themeId']
        })

        console.log(this.themeId)
    }

}
