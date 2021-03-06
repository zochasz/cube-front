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
  get(id: string): Observable<Project> {
      return this.http.get(`${ProjectService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
  }
  remove(id: string): Observable<boolean> {
      return this.http.delete(`${ProjectService.baseEndPoint}/${id}`, BaseApiService.defaultOptions)
          .map(res => res.status === 204)
          .catch(super.handleError);
  }
  create(project): Observable<Project> {
     const data = {
       title: project.title,
       start: project.start,
       end: project.end,
       surface: project.surface,
       budget: project.budget,
       externalEngineer: project.externalEngineer,
       client: project.client,
       description: project.description,
       location: project.location,
       image1: project.image1,
       image2: project.image2,
       image3: project.image3,
       image4: project.image4
     };
     return this.http.post(`${ProjectService.baseEndPoint}`, JSON.stringify(data), BaseApiService.defaultOptions)
       .map(res => res.json())
       .catch(super.handleError);
   }
   edit(project, id): Observable<Project> {
      const data = {
        title: project.title,
        start: project.start,
        end: project.end,
        surface: project.surface,
        budget: project.budget,
        externalEngineer: project.externalEngineer,
        client: project.client,
        description: project.description,
        location: project.location,
        image1: project.image1,
        image2: project.image2,
        image3: project.image3,
        image4: project.image4
      };
      return this.http.put(`${ProjectService.baseEndPoint}/${id}`, JSON.stringify(data), BaseApiService.defaultOptions)
        .map(res => res.json())
        .catch(super.handleError);
    }
}
