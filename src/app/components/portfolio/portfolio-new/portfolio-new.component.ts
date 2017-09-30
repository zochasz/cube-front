import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from './../../../shared/models/project.model';
import { Letter } from './../../../shared/models/letter.model';
import { Portfolio } from './../../../shared/models/portfolio.model';
import { PortfolioService } from './../../../shared/services/portfolio.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio-new',
  templateUrl: './portfolio-new.component.html',
  styleUrls: ['./portfolio-new.component.css']
})
export class PortfolioNewComponent implements OnInit {
  portfolio: Portfolio = new Portfolio();
  projects: Array<Project>;
  letters: Array<Letter>;
  error: string;

  constructor( private portfolioService: PortfolioService, private router: Router ) { }

  ngOnInit() {
    this.fetchProjectsList(),
    this.fetchLettersList()
  }
  fetchProjectsList() {
    this.portfolioService.getProjects().subscribe(
      projects => this.projects = projects,
      error => console.log(error)
    );
  }
  fetchLettersList() {
    this.portfolioService.getLetters().subscribe(
      letters => this.letters = letters,
      error => console.log(error)
    );
  }
  onSubmitNew(newForm): void {
    console.log(newForm.value);
    this.portfolioService.create(this.portfolio).subscribe(
      () => {
        newForm.reset();
        this.router.navigate(['/dashboard']);
      },
      (error) => {this.error = error}
    )
  }
}
