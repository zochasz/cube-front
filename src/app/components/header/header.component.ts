import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../shared/services/auth.service';
import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  error: string;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  register() { this.router.navigate(['/register']); }
  login() { this.router.navigate(['/login']); }
  logout() {
    this.authService.logout().subscribe(
      (ok) => {
        this.router.navigate(['/']);
        location.reload();
      },
      (error) => { this.error = error; },
    );
  }
}
