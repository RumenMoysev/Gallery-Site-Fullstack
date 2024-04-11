import { Component, OnInit } from '@angular/core';
import { PaintingsService } from '../paintings.service';
import { painting } from 'src/app/types/painting';

@Component({
    selector: 'app-paintings-list',
    templateUrl: './paintings-list.component.html',
    styleUrls: ['./paintings-list.component.css']
})
export class PaintingsListComponent implements OnInit{
    paintings: painting[] | undefined
    isLoading: boolean = true

    constructor(private paintingsService: PaintingsService) {}

    ngOnInit(): void {
        this.paintingsService.getAllPaintings().subscribe({
            next: paintings => {
                this.paintings = paintings
                this.isLoading = false
            },
        })
    }
}
