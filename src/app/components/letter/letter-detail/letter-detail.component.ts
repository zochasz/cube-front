import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Letter } from './../../../shared/models/letter.model';
import { LetterService } from './../../../shared/services/letter.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-letter-detail',
  templateUrl: './letter-detail.component.html',
  styleUrls: ['./letter-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LetterDetailComponent implements OnInit {
  letter: Letter;
  error: string;

  constructor(
    private letterService: LetterService,
    private router: Router,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(
    params => this.fetchLetter(params['id']));
  }
  fetchLetter(id: string){
    this.letterService.get(id).subscribe(
      letter => this.letter = letter,
      error => console.log(error)
    );
  }
  onSubmitEdit(editForm, id) {
    this.letterService.edit(editForm.value, id).subscribe(
      () => {},
      (error) => {this.error = error}
    )
  }
}
