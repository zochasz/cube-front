import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ApiError } from '../models/api-error.model';
import { User } from '../models/user.model';
import { Experience } from '../models/experience.model';
import { BaseApiService } from './base-api.service';

import * as _ from 'lodash'

@Injectable()
export class UserService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}/user`;
  private user: User;

  constructor( private http: Http ) {
    super();
  }

  get(): Observable<User> {
      return this.http.get(`${UserService.baseEndPoint}`, BaseApiService.defaultOptions)
        .map(res => {
          this.user = res.json();
          return this.user;
        })
        .catch(super.handleError);
  }

   edit(user): Observable<User> {
      return this.http.put(`${UserService.baseEndPoint}`, JSON.stringify(user), BaseApiService.defaultOptions)
        .map(res => {
          this.user = res.json();
          return this.user;
        })
        .catch(super.handleError);
    }
}
