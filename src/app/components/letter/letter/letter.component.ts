import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';

import { Letter } from './../../../shared/models/letter.model';
import { LetterService } from './../../../shared/services/letter.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {
  letter: Letter;
  error: string;
  private user: User;


  constructor(
    private userService: UserService,
    private letterService: LetterService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchUser();
    this.routes.params.subscribe(
      params => this.fetchLetter(params['id']));
  }
  fetchUser(){
    this.userService.get().subscribe(
      user => {
        this.user = user;
      },
      error => console.log(error)
    );
  }
  fetchLetter(id: string){
    this.letterService.get(id).subscribe(
      letter => this.letter = letter,
      error => console.log(error)
    );
  }
}
