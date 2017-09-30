import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ApiError } from '../models/api-error.model';
import { Portfolio } from '../models/portfolio.model';
import { Project } from '../models/project.model';
import { Letter } from '../models/letter.model';
import { BaseApiService } from './base-api.service';

import * as _ from 'lodash';

@Injectable()
export class PortfolioService extends BaseApiService{
  private static baseEndPoint = `${BaseApiService.baseApi}/portfolio`;
  private portfolios: Array<Portfolio> = [];

  constructor( private http: Http ) {
    super();
  }
  getAll(): Observable<Array<Portfolio>> {
      return this.http.get(PortfolioService.baseEndPoint, BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
  }
  getProjects(): Observable<Array<Project>> {
      return this.http.get(`${BaseApiService.baseApi}/project`, BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
  }
  getLetters(): Observable<Array<Letter>> {
      return this.http.get(`${BaseApiService.baseApi}/letter`, BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
  }
  create(portfolio): Observable<Portfolio> {
     const data = {
       title: portfolio.title,
       projects: portfolio.projects,
       letters: portfolio.letters
     };
     return this.http.post(`${PortfolioService.baseEndPoint}`, JSON.stringify(data), BaseApiService.defaultOptions)
       .map(res => res.json())
       .catch(super.handleError);
   }
}
