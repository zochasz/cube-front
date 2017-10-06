import { Component, OnInit, ViewEncapsulation, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from './../../../shared/models/project.model';
import { ProjectService } from './../../../shared/services/project.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit, OnChanges {
  @Output() onUpdated: EventEmitter<Project> = new EventEmitter<Project>();
  project: Project;
  error: string;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private routes: ActivatedRoute
  ){}

  ngOnInit() {
    this.routes.params.subscribe(
      params => this.fetchProject(params['id']));
  }
  ngOnChanges() {
    this.routes.params.subscribe(
      params => this.fetchProject(params['id']));
  }
  emitProject() {
    this.onUpdated.emit(this.project);
  }
  fetchProject(id: string){
    this.projectService.get(id).subscribe(
      (project) => {
        this.project = project
        this.emitProject()
      },
      error => console.log(error)
    );
  }

  onSubmitEdit(editForm, id) {
    this.projectService.edit(editForm.value, id).subscribe(
      (project) => {
        this.project = project;
        this.emitProject()
      },
      (error) => {this.error = error}
    )
  }
}
