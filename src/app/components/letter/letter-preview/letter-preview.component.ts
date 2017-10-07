import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Letter } from './../../../shared/models/letter.model';
import { LetterService } from './../../../shared/services/letter.service';

import { User } from './../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';

@Component({
  selector: 'app-letter-preview',
  templateUrl: './letter-preview.component.html',
  styleUrls: ['./letter-preview.component.css']
})
export class LetterPreviewComponent implements OnInit {
  letter: Letter;
  user: User;

  constructor(
    private letterService: LetterService,
    private userService: UserService,
    private router: Router,
    private routes: ActivatedRoute
   ) { }

  ngOnInit() {
    this.fetchUser();
    this.routes.params.subscribe(
    params => this.fetchLetter(params['id']));
  }

  fetchLetter(id: string){
    this.letterService.get(id).subscribe(
      letter => this.letter = letter,
      error => console.log(error)
    );
  }
  fetchUser(){
    this.userService.get().subscribe(
      user => {
        this.user = user;
      },
      error => console.log(error)
    );
  }
  onChangeLetter(letter: Letter) {
    this.letter = letter;
  }
}
