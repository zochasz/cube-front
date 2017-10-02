import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ApiError } from '../models/api-error.model';
import { Letter } from '../models/letter.model';
import { BaseApiService } from './base-api.service';

import * as _ from 'lodash'

@Injectable()
export class LetterService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}/letter`;
  private letters: Array<Letter> = [];

  constructor( private http: Http ) {
    super();
  }

  getAll(): Observable<Array<Letter>> {
    return this.http.get(LetterService.baseEndPoint, BaseApiService.defaultOptions)
    .map(res => res.json())
    .catch(super.handleError);
  }
  get(id: string): Observable<Letter> {
      return this.http.get(`${LetterService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
  }
  remove(id: string): Observable<boolean> {
      return this.http.delete(`${LetterService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
          .map(res => res.status === 204)
          .catch(super.handleError);
  }
  create(letter): Observable<Letter> {
     const data = {
       title: letter.title,
       from: letter.from,
       to: letter.to,
       text: letter.text,
     };
     return this.http.post(`${LetterService.baseEndPoint}`, JSON.stringify(data), BaseApiService.defaultOptions)
       .map(res => res.json())
       .catch(super.handleError);
   }
   edit(letter, id): Observable<Letter> {
     const data = {
       title: letter.title,
       from: letter.from,
       to: letter.to,
       text: letter.text,
     };
      return this.http.put(`${LetterService.baseEndPoint}/${id}`, JSON.stringify(data), BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
    }
}
