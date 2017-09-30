import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from './../../../shared/models/project.model';
import { ProjectService } from './../../../shared/services/project.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private routes: ActivatedRoute
  ){}

  ngOnInit() {
    this.routes.params.subscribe(
      params => this.fetchProject(params['id']));
  }

  fetchProject(id: string){
    this.projectService.get(id).subscribe(
      project => this.project = project,
      error => console.log(error)
    );
  }
}
