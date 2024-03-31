import { Component, OnInit } from '@angular/core';
import { PaintingsService } from '../paintings.service';
import { painting } from 'src/app/types/painting';
import { tap } from 'rxjs';

@Component({
    selector: 'app-paintings-list',
    templateUrl: './paintings-list.component.html',
    styleUrls: ['./paintings-list.component.css']
})
export class PaintingsListComponent implements OnInit{
    paintings: painting[] | undefined

    constructor(private paintingsService: PaintingsService) {}

    ngOnInit(): void {
        this.paintingsService.getAllPaintings().pipe(tap(paintings => this.paintings = paintings as painting[])).subscribe()
    }
}
