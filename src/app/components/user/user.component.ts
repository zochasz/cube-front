import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() user: User;
  @Output() onChange: EventEmitter<User> = new EventEmitter<User>();
  error: string;

  private showEducation = false;
  private showJob = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private routes: ActivatedRoute
  ){}

  ngOnInit() {
    this.user = new User();
  }

  onSubmitEdit(editForm) {
    this.syncUser();
  }

  onSubmitAddJob(addFormJob) {
    this.user['experience'].push(addFormJob.value);
    this.showJob = false;
    addFormJob.reset();
    this.syncUser();
  }

  onSubmitAddUniversity(addUniversityForm) {
    this.user['education'].push(addUniversityForm.value);
    this.showEducation = false;
    addUniversityForm.reset();
    this.syncUser();
  }
  addJob() {
    this.showJob = true;
  }
  addEducation() {
    this.showEducation = true;
  }
  deleteEducation(i) {
    this.user.education.splice(i, 1);
    this.syncUser();
  }
  deleteJob(i) {
    this.user.experience.splice(i, 1);
    this.syncUser();
  }

  syncUser() {
    this.userService.edit(this.user).subscribe(
      (user) => {
        this.user = user;
        this.onChange.emit(this.user);
      },
      (error) => {this.error = error}
    )
  }
}
