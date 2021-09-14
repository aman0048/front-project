import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './LOGIN COMPONENT/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BasicAuthHtppInterceptorService } from './basic-auth-interceptor.service';
import { AddStudentComponent } from './ADD METHOD/add-student/add-student.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewStudentComponent } from './VIEW COMPONENT/view-student/view-student.component';
import { AddOfficerComponent } from './REGISTER/add-officer/add-officer.component';
import { ViewOfficerComponent } from './VIEW COMPONENT/view-officer/view-officer.component';
import { AddInstituteComponent } from './ADD METHOD/add-institute/add-institute.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentLogginComponent } from './REGISTER/student-loggin/student-loggin.component';
import { MinistryLoginComponent } from './REGISTER/ministry-login/ministry-login.component';
import { ViewStudentdataMinistryComponent } from './VIEW COMPONENT/view-studentdata-ministry/view-studentdata-ministry.component';
import { ViewStudentdataOfficerComponent } from './VIEW COMPONENT/view-studentdata-officer/view-studentdata-officer.component';
import { ViewStudentByIdComponent } from './VIEW COMPONENT/view-student-by-id/view-student-by-id.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { OrderByPipe } from './order-by.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewAllInstitutesComponent } from './view-all-institutes/view-all-institutes.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AddStudentComponent,
    LogoutComponent,
    ViewStudentComponent,
    AddOfficerComponent,
    ViewOfficerComponent,
    AddInstituteComponent,
    UpdateStudentComponent,
    StudentLogginComponent,
    MinistryLoginComponent,
    ViewStudentdataMinistryComponent,
    ViewStudentdataOfficerComponent,
    ViewStudentByIdComponent,
    SearchpipePipe,
    OrderByPipe,
    PageNotFoundComponent,
    ViewAllInstitutesComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
  
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
