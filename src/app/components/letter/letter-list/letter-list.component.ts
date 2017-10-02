import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Letter } from './../../../shared/models/letter.model';
import { LetterService } from './../../../shared/services/letter.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: [
    './../../project/project-list/project-list.component.css',
    './letter-list.component.css'
  ]
})
export class LetterListComponent implements OnInit {
  letters: Array<Letter> = [];

  constructor( private letterService: LetterService, private router: Router ) { }

  ngOnInit() {
    this.fetchList();
  }
  fetchList() {
    this.letterService.getAll().subscribe(
      letters => this.letters = letters,
      error => console.log(error)
    );
  }
  addLetter() {
    this.router.navigate(['/letter/new']);
  }
  showLetter(id: string) {
    this.router.navigate([`/letter/${id}`]);
  }
  delete(id: string) {
    this.letterService.remove(id)
    .subscribe((removed) => {
      if (removed) {
        this.letters = this.letters.filter(letter => letter._id !== id)
      } else {
        console.log ("error: Letter not found")
      }
    },
    (err) => console.log(err)
    )
  }
}
