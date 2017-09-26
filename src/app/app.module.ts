import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { ProjectNewComponent } from './components/project/project-new/project-new.component';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { LetterListComponent } from './components/letter/letter-list/letter-list.component';
import { LetterEditComponent } from './components/letter/letter-edit/letter-edit.component';
import { LetterNewComponent } from './components/letter/letter-new/letter-new.component';
import { LetterDetailComponent } from './components/letter/letter-detail/letter-detail.component';
import { PortfolioListComponent } from './components/portfolio/portfolio-list/portfolio-list.component';
import { PortfolioEditComponent } from './components/portfolio/portfolio-edit/portfolio-edit.component';
import { PortfolioNewComponent } from './components/portfolio/portfolio-new/portfolio-new.component';
import { PortfolioDetailComponent } from './components/portfolio/portfolio-detail/portfolio-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashbordComponent},
  { path: 'project/new', component: ProjectNewComponent },
  { path: 'project/:id/edit', component: ProjectEditComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'letter/new', component: LetterNewComponent },
  { path: 'letter/:id/edit', component: LetterEditComponent },
  { path: 'letter/:id', component: LetterDetailComponent },
  { path: 'portfolio/new', component: PortfolioNewComponent },
  { path: 'portfolio/:id/edit', component: PortfolioEditComponent },
  { path: 'portfolio/:id', component: PortfolioDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashbordComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    ProjectListComponent,
    ProjectEditComponent,
    ProjectNewComponent,
    ProjectDetailComponent,
    LetterListComponent,
    LetterEditComponent,
    LetterNewComponent,
    LetterDetailComponent,
    PortfolioListComponent,
    PortfolioEditComponent,
    PortfolioNewComponent,
    PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
