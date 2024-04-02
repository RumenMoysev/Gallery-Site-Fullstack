import { Component, OnInit } from '@angular/core';
import { PaintingsService } from 'src/app/models/paintings/paintings.service';
import { UserService } from 'src/app/models/user/user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: User | undefined

  constructor(private userService: UserService, private paintingsService: PaintingsService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.userData = user as User)
  }
}
