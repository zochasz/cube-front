import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from './../../../shared/models/project.model';
import { ProjectService } from './../../../shared/services/project.service';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {
  project: Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(
      params => this.fetchProject(params['id']));
  }
  
  fetchProject(id: string){
    this.projectService.get(id).subscribe(
      (project) => {
        this.project = project
      },
      error => console.log(error)
    );
  }
}
