import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy{
    backgroundPositionX: string | undefined
    backgroundPositionY: string | undefined

    moveBackground: any

    constructor() {
        this.moveBackground = (e: MouseEvent) => {
            let x = e.clientX / 6
            let y = e.clientY / 6

            this.backgroundPositionX = x + 'px'
            this.backgroundPositionY = y + 'px'
        }
    }

    ngOnInit(): void {
        window.addEventListener('mousemove', this.moveBackground)
    }

    ngOnDestroy(): void {
        window.removeEventListener('mousemove', this.moveBackground)
    }
}
