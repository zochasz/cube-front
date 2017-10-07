import { Component, Input } from '@angular/core';

import { User } from './../../shared/models/user.model';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  @Input() user: User;

}
