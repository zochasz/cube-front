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
}
