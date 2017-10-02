import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Letter } from './../../../shared/models/letter.model';
import { LetterService } from './../../../shared/services/letter.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-letter-new',
  templateUrl: './letter-new.component.html',
  styleUrls: ['./letter-new.component.css']
})
export class LetterNewComponent implements OnInit {
  letter: Letter;
  error: string;

  constructor(
    private letterService: LetterService,
    private router: Router
  ) { }

  ngOnInit() {}

  onSubmitNew(newForm): void {
      this.letterService.create(newForm.value).subscribe(
        () => {
          newForm.reset();
          this.router.navigate(['/dashboard']);
        },
        (error) => {this.error = error}
      )
    }
}
