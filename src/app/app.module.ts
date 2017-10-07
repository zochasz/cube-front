import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileSelectDirective } from "ng2-file-upload";

import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { ProjectService } from './shared/services/project.service';
import { LetterService } from './shared/services/letter.service';
import { PortfolioService } from './shared/services/portfolio.service';

import { IsAuthenticatedGuard } from './components/guards/is-authenticated.guard';

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
import { CvComponent } from './components/cv/cv.component';
import { ProjectComponent } from './components/project/project/project.component';
import { LetterComponent } from './components/letter/letter/letter.component';
import { CvPreviewComponent } from './components/cv-preview/cv-preview.component';
import { LetterPreviewComponent } from './components/letter/letter-preview/letter-preview.component';
import { ProjectPreviewComponent } from './components/project/project-preview/project-preview.component';
import { PortfolioPreviewComponent } from './components/portfolio/portfolio-preview/portfolio-preview.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashbordComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  { path: 'cv', component: CvPreviewComponent},
  { path: 'project/new', component: ProjectNewComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  { path: 'project/:id', component: ProjectPreviewComponent },
  { path: 'letter/new', component: LetterNewComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  { path: 'letter/:id', component: LetterPreviewComponent },
  { path: 'portfolio/new', component: PortfolioNewComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  { path: 'portfolio/:id', component: PortfolioPreviewComponent },
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
    PortfolioDetailComponent,
    CvComponent,
    FileSelectDirective,
    ProjectComponent,
    LetterComponent,
    CvPreviewComponent,
    LetterPreviewComponent,
    ProjectPreviewComponent,
    PortfolioPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    UserService,
    ProjectService,
    LetterService,
    PortfolioService,
    IsAuthenticatedGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
