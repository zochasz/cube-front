import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './../models/user.model';
import { ApiError } from '../models/api-error.model';
import { BaseApiService } from './base-api.service';

@Injectable()
export class AuthService extends BaseApiService {
  private user: User;

  constructor(private http: Http) {
    super();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  isAuthenticated(): boolean {
    // console.log(this.user);
    return this.user ? true : false;
  }

  login(user: User): Observable<User | string> {
    const data: Object = {
      email: user.email,
      password: user.password
    };
    return this.http.post(`${BaseApiService.baseApi}/login`, JSON.stringify(data), BaseApiService.defaultOptions)
      .map((res: Response) => {
        this.authenticate(res.json());
        return this.user;
      })
      .catch(super.handleError);
  }

  register(user: User): Observable<User | string> {
  const data: Object = {
    email: user.email,
    password: user.password
  };
  return this.http.post(`${BaseApiService.baseApi}/register`, JSON.stringify(data), BaseApiService.defaultOptions)
    .map((res: Response) => {
      this.authenticate(res.json());
      return this.user;
    })
    .catch(super.handleError);
}

  logout(): Observable<boolean | string> {
    return this.http.post(`${BaseApiService.baseApi}/logout`, null, BaseApiService.defaultOptions)
      .map((res: Response) => {
        this.user = null;
        localStorage.removeItem('user');
        return res.status === 204;
      })
      .catch(super.handleError);
  }

  private authenticate(user: User): User {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    return this.user;
  }
}
