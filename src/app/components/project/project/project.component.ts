import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from './../../../shared/models/project.model';
import { ProjectService } from './../../../shared/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  error: string;

  constructor(
    private projectService: ProjectService,
    // private router: Router,
    private routes: ActivatedRoute

   ) { }

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
