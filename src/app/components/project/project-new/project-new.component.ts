import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

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
  // public uploader: FileUploader;
  // feedback: string;

  constructor( private projectService: ProjectService, private router: Router ) { }

  ngOnInit() {
    // this.uploader = new FileUploader({
    //         url: '/',
    //         headers: [{name:'Accept', value:'application/json'}],
    //         autoUpload: true,
    // });
    // this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    // this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
  }

  // onSuccessItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  //       let data = JSON.parse(response); //success server response
  //   }
  //
  //   onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): any {
  //       let error = JSON.parse(response); //error server response
  //   }

  onSubmitNew(newForm): void {

    console.log(newForm.value)

    this.projectService.create(newForm.value).subscribe(
      () => {
        // this.uploader.uploadAll();
        newForm.reset();
        this.router.navigate(['/dashboard']);
      },
      (error) => {this.error = error}
    )
  }
}
