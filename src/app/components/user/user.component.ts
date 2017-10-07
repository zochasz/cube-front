import { Component, OnInit, Input } from '@angular/core';
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
  error: string;
  
  private showEducation = false;
  private showJob = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private routes: ActivatedRoute
  ){}

  ngOnInit() {}

  onSubmitEdit(editForm) {
    this.user = editForm.value
    this.userService.edit(this.user).subscribe(
      (user) => {
        this.user = user;
        // this.emitUser();
      },
      (error) => {this.error = error}
    )
  }
  onSubmitAddJob(addFormJob) {
    this.user['experience'].push(addFormJob.value);
    this.userService.edit(this.user).subscribe(
      () => {
        this.showJob = false;
        addFormJob.reset();
      },
      (error) => {this.error = error}
    )
  }
  onSubmitAddUniversity(addUniversityForm) {
    this.user['education'].push(addUniversityForm.value);
    this.userService.edit(this.user).subscribe(
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
  deleteEducation(i) {
    this.user.education.splice(i, 1);
    this.userService.edit(this.user).subscribe(
      () => {},
      (error) => {this.error = error}
    )
  }
  deleteJob(i) {
    this.user.experience.splice(i, 1);
    this.userService.edit(this.user).subscribe(
      () => {},
      (error) => {this.error = error}
    )
  }
}
