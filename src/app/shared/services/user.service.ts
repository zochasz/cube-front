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
  private user: Array<User> = [];
  // private experience: Array<Experience> = [];

  constructor( private http: Http ) {
    super();
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  get(): Observable<User> {
      return this.http.get(`${UserService.baseEndPoint}`, BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
  }

   edit(user): Observable<User> {
      const data = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNo: user.phoneNo,
        address: user.address,
        url: user.url,
        linkedIn: user.linkedIn,
        pinterest: user.pinterest,
        profile: user.profile,
        interests: user.interests
      };
      return this.http.put(`${UserService.baseEndPoint}`, JSON.stringify(data), BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
    }
    addJob(job): Observable<User> {
       const work = {
         name: job.name,
         title: job.title,
         from: job.from,
         to: job.to,
         description: job.description
       };
       this.user['experience'].push(work);

       return this.http.put(`${UserService.baseEndPoint}`, JSON.stringify(this.user), BaseApiService.defaultOptions)
         .map(res => res.json())
         .catch(super.handleError);
     }
     addUniversity(degree): Observable<User> {
        const education = {
          name: degree.name,
          title: degree.title,
          from: degree.from,
          to: degree.to,
          description: degree.description
        };
        this.user['education'].push(education);

        const data = {
          education: this.user['education']
        }
        return this.http.put(`${UserService.baseEndPoint}`, JSON.stringify(this.user), BaseApiService.defaultOptions)
          .map(res => res.json())
          .catch(super.handleError);
      }
}
