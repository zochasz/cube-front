import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './../../shared/models/user.model';
import { UserService } from './../../shared/services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {
  @Output() onUpdated: EventEmitter<User> = new EventEmitter<User>();
  user: User;
  error: string;
  private showEducation = false;
  private showJob = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private routes: ActivatedRoute
  ){}

  ngOnInit() {
    this.fetchUser();
  }

  ngOnChanges() {
    this.fetchUser();
  }

  fetchUser(){
    this.userService.get().subscribe(
      user => {
        this.user = user;
        this.emitUser();
      },
      error => console.log(error)
    );
  }

  emitUser() {
    this.onUpdated.emit(this.user);
  }

  onSubmitEdit(editForm) {
    this.userService.edit(editForm.value).subscribe(
      (user) => {
        this.user = user;
        this.emitUser();
      },
      (error) => {this.error = error}
    )
  }
  onSubmitAddJob(addFormJob) {
    this.userService.addJob(addFormJob.value).subscribe(
      () => {
        this.showJob = false;
        addFormJob.reset();
      },
      (error) => {this.error = error}
    )
  }
  onSubmitAddUniversity(addUniversityForm) {
    this.userService.addUniversity(addUniversityForm.value).subscribe(
      () => {
        this.showEducation = false;
        addUniversityForm.reset();
      },
      (error) => {this.error = error}
    )
  }
  addJob() {
    this.showJob = true;
  }
  addEducation() {
    this.showEducation = true;
  }
  deleteEducation(id: string) {
    // this.userService.remove(id)
    // .subscribe((removed) => {
    //   if (removed) {
    //     this.user['experience'] = this.user.filter(user => user._id !== id)
    //   } else {
    //     console.log ("error: User not found")
    //   }
    // },
    // (err) => console.log(err)
    // )
  }
}
