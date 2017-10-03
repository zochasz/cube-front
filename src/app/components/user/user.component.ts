import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './../../shared/models/user.model';
import { UserService } from './../../shared/services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  error: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private routes: ActivatedRoute
  ){
    // this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser(){
    this.userService.get().subscribe(
      user => this.user = user,
      error => console.log(error)
    );
  }

  onSubmitEdit(editForm) {
    this.userService.edit(editForm.value).subscribe(
      () => {},
      (error) => {this.error = error}
    )
  }
}
