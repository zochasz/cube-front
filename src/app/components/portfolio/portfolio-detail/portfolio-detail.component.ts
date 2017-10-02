import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Portfolio } from './../../../shared/models/portfolio.model';
import { PortfolioService } from './../../../shared/services/portfolio.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioDetailComponent implements OnInit {
  portfolio: Portfolio;
  error: string;

  constructor(
    private portfolioService: PortfolioService,
    private router: Router,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routes.params.subscribe(
      params => this.fetchPortfolio(params['id']));
  }
  fetchPortfolio(id: string) {
    this.portfolioService.get(id).subscribe(
      portfolio => this.portfolio = portfolio,
      error => this.error = error
    );
  }
  onSubmitEdit(editForm, id) {
    this.portfolioService.edit(editForm.value, id).subscribe(
      () => {},
      (error) => {this.error = error}
    )
  }
}
