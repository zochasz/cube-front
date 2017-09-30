import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './../../../shared/models/project.model';
import { ProjectService } from './../../../shared/services/project.service'

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {
  project: Project = new Project;
  error: string;

  constructor( private projectService: ProjectService, private router: Router ) { }

  ngOnInit() {
  }

  onSubmitNew(newForm): void {

    this.projectService.create(newForm.value).subscribe(
      () => {
        newForm.reset();
        this.router.navigate(['/dashboard']);
      },
      (error) => {this.error = error}
    )
  }
}
