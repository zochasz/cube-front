import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './../models/user.model';

@Injectable()
export class AuthService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}`;
  private user: User;

  constructor(private http: Http) {
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
    return this.http.post(`${this.baseEndPoint}/login`, JSON.stringify(data), this.options)
      .map((res: Response) => {
        this.authenticate(res.json());
        return this.user;
      })
      .catch(this.handleError);
  }

  register(user: User): Observable<User | string> {
  const data: Object = {
    email: user.email,
    password: user.password
  };
  return this.http.post(`${this.baseEndPoint}/register`, JSON.stringify(data), this.options)
    .map((res: Response) => {
      this.authenticate(res.json());
      return this.user;
    })
    .catch(this.handleError);
}

  logout(): Observable<boolean | string> {
    return this.http.post(`${this.baseEndPoint}/logout`, null, this.options)
      .map((res: Response) => {
        this.user = null;
        localStorage.removeItem('user');
        return res.status === 204;
      })
      .catch(this.handleError);
  }

  private authenticate(user: User): User {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
    return this.user;
  }

  private handleError(error: Response | any): Observable<string> {
    console.error(error);
    return Observable.throw(error.json().message);
  }
}
