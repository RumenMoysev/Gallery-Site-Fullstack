import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaintingsService } from '../paintings.service';
import { paintingDetails } from 'src/app/types/painting';
import { UserService } from '../../user/user.service';

@Component({
    selector: 'app-painting-details',
    templateUrl: './painting-details.component.html',
    styleUrls: ['./painting-details.component.css']
})

export class PaintingDetailsComponent implements OnInit {
    paintingDetails: paintingDetails | undefined

    constructor(
        private activatedRoute: ActivatedRoute,
        private paintingsService: PaintingsService,
        private userService: UserService,
        private router: Router
    ) { }

    get isLoggedIn() {
        return this.userService.isLoggedIn
    }

    get hasLiked() {
        return this.paintingDetails?.likes.includes(this.userService.userId as string)
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(data => this.getPaintingDetails(data['paintingId']))
    }

    getPaintingDetails(paintingId: string) {
        this.paintingsService.getPaintingsDetails(paintingId).subscribe((details) => {
            this.paintingDetails = details
            this.paintingDetails.owner = this.paintingDetails.owner === this.userService.userId
        })
    }

    deletePainting(event: Event) {
        event.preventDefault()
        if (confirm('Are you sure you want to delete this painting?')) {
            this.paintingsService.deletePainting(this.paintingDetails?._id as string).subscribe(data => this.router.navigate(['/gallery']))
        }
    }

    likePainting(event: Event) {
        event.preventDefault()

        if(this.isLoggedIn && !this.hasLiked) {
            this.paintingDetails?.likes.push(this.userService.userId as string)
            this.activatedRoute.params.subscribe(data => this.paintingsService.likePainting(data['paintingId']).subscribe())
        }
    }
}