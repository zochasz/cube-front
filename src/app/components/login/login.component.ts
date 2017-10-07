import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../shared/services/auth.service';
import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User = new User();
    error: string;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
    }

    onSubmitLogin(loginForm) {
      this.authService.login(this.user).subscribe(
        (user) => {
          loginForm.reset();
          this.router.navigate(['/dashboard']);
          location.reload();
        },
        (error) => { this.error = error; }
      );
    }
}
