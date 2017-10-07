import { Component, OnInit, Input } from '@angular/core';

import { User } from './../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';

import { Letter } from './../../../shared/models/letter.model';
import { LetterService } from './../../../shared/services/letter.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent {
  @Input() user: User;
  @Input() letter: Letter;
}
