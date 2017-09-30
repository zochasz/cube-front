import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ApiError } from '../models/api-error.model';
import { Project } from '../models/project.model';
import { BaseApiService } from './base-api.service';

import * as _ from 'lodash'

@Injectable()
export class ProjectService extends BaseApiService {
  private static baseEndPoint = `${BaseApiService.baseApi}/project`;
  private projects: Array<Project> = [];

  constructor( private http: Http ) {
    super();
  }

  getAll(): Observable<Array<Project>> {
      return this.http.get(ProjectService.baseEndPoint, BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
  }
  remove(id: string): Observable<boolean> {
      return this.http.delete(`${ProjectService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
          .map(res => res.status === 204)
          .catch(super.handleError);
  }
  create(project): Observable<Project> {
    console.log(project);
     const data = {
       title: project.title,
       start: project.start,
       end: project.end,
       surface: project.surface,
       budget: project.budget,
       externalEngineer: project.externalEngineer,
       client: project.client,
       description: project.description,
       location: project.location
     };
     return this.http.post(`${ProjectService.baseEndPoint}`, JSON.stringify(data), BaseApiService.defaultOptions)
       .map(res => res.json())
       .catch(super.handleError);
   }
}

//
// @Injectable()
// export class ListService extends BaseApiService {
//   private static baseEndPoint = `${BaseApiService.baseApi}/lists`;
//
//   private lists: Array<List> = [];
//
//   constructor(private http: Http) {
//     super();
//   }
//
//   getAll(): Observable<Array<List>> {
//     return this.http.get(ListService.baseEndPoint, BaseApiService.defaultOptions)
//       .map(res => res.json())
//       .catch(super.handleError);
//   }
//
//   create(title: string): Observable<List> {
//     const data = {
//       title: title
//     };
//     return this.http.post(`${ListService.baseEndPoint}`, JSON.stringify(data), BaseApiService.defaultOptions)
//       .map(res => res.json())
//       .catch(super.handleError);
//   }
//
//   edit(list: List): Observable<List> {
//     return this.http.put(`${ListService.baseEndPoint}/${list._id}`, JSON.stringify(list), BaseApiService.defaultOptions)
//       .map(res => res.json())
//       .catch(super.handleError);
//   }
//
//   remove(id: string): Observable<boolean> {
//     return this.http.delete(`${ProjectService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
//       .map(res => res.status === 204)
//       .catch(super.handleError);
//     }
// }
