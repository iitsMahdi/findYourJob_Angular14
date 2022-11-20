import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { FooterComponent } from './footer/footer.component';
import { ListJobComponent } from './list-job/list-job.component';
import { JobFormComponent } from './job-form/job-form.component';
import { HeaderCompanyComponent } from './header-company/header-company.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SignupWorkerComponent } from './signup-worker/signup-worker.component';
import { SignupCompComponent } from './signup-comp/signup-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    ContentHomeComponent,
    FooterComponent,
    ListJobComponent,
    JobFormComponent,
    HeaderCompanyComponent,
    DashboardAdminComponent,
    SignupWorkerComponent,
    SignupCompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
