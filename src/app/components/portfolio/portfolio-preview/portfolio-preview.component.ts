import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './../../../shared/models/user.model';
import { UserService } from './../../../shared/services/user.service';

import { Letter } from './../../../shared/models/letter.model';
import { LetterService } from './../../../shared/services/letter.service';

import { Project } from './../../../shared/models/project.model';
import { ProjectService } from './../../../shared/services/project.service';

import { Portfolio } from './../../../shared/models/portfolio.model';
import { PortfolioService } from './../../../shared/services/portfolio.service';

@Component({
  selector: 'app-portfolio-preview',
  templateUrl: './portfolio-preview.component.html',
  styleUrls: ['./portfolio-preview.component.css']
})
export class PortfolioPreviewComponent implements OnInit {
  portfolio: Portfolio;
  error: string;
  user: User;

  constructor(
    private portfolioService: PortfolioService,
    private router: Router,
    private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routes.params.subscribe(
      params => this.fetchPortfolio(params['id']));
  }
  fetchPortfolio(id: string) {
    this.portfolioService.get(id).subscribe(
      (portfolio) => {
        this.portfolio = portfolio;
        console.log(this.portfolio)
        // this.letters = portfolio['letters'];
        // this.projects = portfolio.projects;
        // this.user = portfolio.author;
      },
      error => this.error = error
    );
  }

}
