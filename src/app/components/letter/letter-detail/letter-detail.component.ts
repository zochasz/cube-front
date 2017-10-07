import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Letter } from './../../../shared/models/letter.model';
import { LetterService } from './../../../shared/services/letter.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-letter-detail',
  templateUrl: './letter-detail.component.html',
  styleUrls: ['./letter-detail.component.css']
})
export class LetterDetailComponent implements OnInit {
  @Input() letter: Letter;
  @Output() onChange: EventEmitter<Letter> = new EventEmitter<Letter>();

  error: string;

  constructor(
    private letterService: LetterService,
    private router: Router,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.letter = new Letter;
  }


  onSubmitEdit(editForm, id) {
    this.letterService.edit(editForm.value, id).subscribe(
      (letter) => {
        this.letter = letter;
        this.onChange.emit(this.letter);
      },
      (error) => {this.error = error}
    )
  }
}
