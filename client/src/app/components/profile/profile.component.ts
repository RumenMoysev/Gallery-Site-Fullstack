import { Component, OnInit } from '@angular/core';
import { PaintingsService } from 'src/app/models/paintings/paintings.service';
import { UserService } from 'src/app/models/user/user.service';
import { painting } from 'src/app/types/painting';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: User | undefined
  paintings: painting[] | undefined

  ownedSelected: boolean = true
  likedSelected: boolean = false

  constructor(private userService: UserService, private paintingsService: PaintingsService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.userData = user)
    this.getOwned()
  }

  getOwned(): void {
    this.paintingsService.getOwnedPaintings().subscribe(data => this.paintings = data)
    this.ownedSelected = true
    this.likedSelected = false
  }

  getLiked(): void {
    this.paintingsService.getLikedPaintings().subscribe(data => this.paintings = data)
    this.likedSelected = true
    this.ownedSelected = false
  }
}
