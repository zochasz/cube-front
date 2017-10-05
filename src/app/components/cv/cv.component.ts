import { Component, OnInit } from '@angular/core';
import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit() {}

  onUserUpdated(user: User) {
    this.user = user;
  }

}
