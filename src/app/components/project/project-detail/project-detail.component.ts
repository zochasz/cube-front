import { Component, OnInit, Input } from '@angular/core';
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
  @Input() project: Project;
  error: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private routes: ActivatedRoute
  ){}

  ngOnInit() {

  }
  
  onSubmitEdit(editForm, id) {
    this.projectService.edit(editForm.value, id).subscribe(
      (project) => {
        this.project = project;
      },
      (error) => {this.error = error}
    )
  }
}
