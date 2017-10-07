import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Output() onChange: EventEmitter<Project> = new EventEmitter<Project>();
  error: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private routes: ActivatedRoute
  ){}

  ngOnInit() {
    this.project = new Project;
  }
  
  onSubmitEdit(editForm, id) {
    this.projectService.edit(editForm.value, id).subscribe(
      (project) => {
        this.project = project;
        this.onChange.emit(this.project);
      },
      (error) => {this.error = error}
    )
  }
}
