import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Portfolio } from './../../../shared/models/portfolio.model';
import { PortfolioService } from './../../../shared/services/portfolio.service'
import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: [
    './../../project/project-list/project-list.component.css',
  './portfolio-list.component.css'
]
})
export class PortfolioListComponent implements OnInit {
  portfolios: Array<Portfolio> = [];

  constructor( private portfolioService: PortfolioService, private router: Router ) { }

  ngOnInit() {
    this.fetchList();
  }

  fetchList() {
    this.portfolioService.getAll().subscribe(
      portfolios => this.portfolios = portfolios,
      error => console.log(error)
    );
  }
  addProject() {
    this.router.navigate(['/portfolio/new']);
  }
}
