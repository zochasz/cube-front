import { Component, OnInit } from '@angular/core';

import { User } from './../../shared/models/user.model';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'app-cv-preview',
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.css']
})
export class CvPreviewComponent implements OnInit {
  user: User;

  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.fetchUser();
  }
  fetchUser(){
    this.userService.get().subscribe(
      user => {
        this.user = user;
        // this.emitUser();
      },
      error => console.log(error)
    );
  }
}
