import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaintingsService } from 'src/app/models/paintings/paintings.service';
import { painting } from 'src/app/types/painting';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    paintings: painting[] | undefined

    constructor(private router: Router, private paintingsService: PaintingsService) {}

    buttonRedirect(): void {
        this.router.navigate(['/gallery'])
    }

    cardRedirect(paintingId: string): void {
        this.router.navigate([`gallery/${paintingId}`])
    }

    ngOnInit(): void {
        this.paintingsService.getLast2().subscribe(data => this.paintings = data as painting[])
    }
}
