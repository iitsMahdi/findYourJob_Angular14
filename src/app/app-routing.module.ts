import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JobFormComponent } from './job-form/job-form.component';
import { ListJobComponent } from './list-job/list-job.component';
import { LoginComponent } from './login/login.component';
import { SignupCompComponent } from './signup-comp/signup-comp.component';
import { SignupWorkerComponent } from './signup-worker/signup-worker.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"banner",component:BannerComponent},
  {path:"content-home",component:ContentHomeComponent},
  {path:"",component:HomeComponent},
  {path:"job-form",component:JobFormComponent},
  {path:"job-list",component:ListJobComponent},
  {path:"signupW",component:SignupWorkerComponent},
  {path:"signupC",component:SignupCompComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
