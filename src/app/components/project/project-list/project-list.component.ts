import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './../../../shared/models/project.model';
import { ProjectService } from './../../../shared/services/project.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Array<Project> = [];
  project: Project;

  constructor( private projectService: ProjectService, private router: Router ) { }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {
    this.projectService.getAll().subscribe(
      projects => this.projects = projects,
      error => console.log(error)
    );
  }
  addProject() {
    this.router.navigate(['/project/new']);
  }
  showProject(id: string) {
    this.router.navigate([`/project/${id}`]);
  }
  delete(id: string) {
    this.projectService.remove(id)
    .subscribe((removed) => {
      if (removed) {
        this.projects = this.projects.filter(project => project._id !== id)
      } else {
        console.log ("error: List not found")
      }
    },
    (err) => console.log(err)
    )
  }
}

// export class ListComponent implements OnInit {
//
//
//   ngOnInit() { }
//
//   removeList() {
//     this.listService.remove(this.list._id)
//       .subscribe((removed) => {
//         if (removed) {
//           this.onDelete.emit(this.list)
//         } else {
//           this.toastService.onError({ message: 'List not found'})
//         }
//       },
//       (err) => this.toastService.onError(err)
//     );
//   }
//
//   editList() {
//     this.listService.edit(this.list).subscribe(
//       (list) => {
//         if (list) {
//           this.list = list;
//           this.onEdit.emit(this.list);
//         } else {
//           this.toastService.onError({ message: 'List not found' })
//         }
//       },
//       (err) => this.toastService.onError(err)
//     );
//   }
//   addCard(title) {
//     // TODO: Implement
//   }
// }
