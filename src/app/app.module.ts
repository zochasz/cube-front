import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { ProjectService } from './shared/services/project.service';
import { LetterService } from './shared/services/letter.service';
import { PortfolioService } from './shared/services/portfolio.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ProjectListComponent } from './components/project/project-list/project-list.component';
import { ProjectNewComponent } from './components/project/project-new/project-new.component';
import { ProjectDetailComponent } from './components/project/project-detail/project-detail.component';
import { LetterListComponent } from './components/letter/letter-list/letter-list.component';
import { LetterNewComponent } from './components/letter/letter-new/letter-new.component';
import { LetterDetailComponent } from './components/letter/letter-detail/letter-detail.component';
import { PortfolioListComponent } from './components/portfolio/portfolio-list/portfolio-list.component';
import { PortfolioNewComponent } from './components/portfolio/portfolio-new/portfolio-new.component';
import { PortfolioDetailComponent } from './components/portfolio/portfolio-detail/portfolio-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashbordComponent},
  { path: 'project/new', component: ProjectNewComponent },
  { path: 'project/:id', component: ProjectDetailComponent },
  { path: 'letter/new', component: LetterNewComponent },
  { path: 'letter/:id', component: LetterDetailComponent },
  { path: 'portfolio/new', component: PortfolioNewComponent },
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
    ProjectNewComponent,
    ProjectDetailComponent,
    LetterListComponent,
    LetterNewComponent,
    LetterDetailComponent,
    PortfolioListComponent,
    PortfolioNewComponent,
    PortfolioDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    AuthService,
    UserService,
    ProjectService,
    LetterService,
    PortfolioService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
