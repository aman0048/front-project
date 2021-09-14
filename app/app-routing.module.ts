import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './LOGIN COMPONENT/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddStudentComponent } from './ADD METHOD/add-student/add-student.component';
import { AuthGuard } from './auth.guard';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewAllInstitutesComponent } from './view-all-institutes/view-all-institutes.component';

const routes: Routes = [
  { path: 'homepage1', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'addStudent', component: AddStudentComponent, canActivate:[AuthGuard] },
  {path: 'viewStudent', component: ViewStudentComponent, canActivate:[AuthGuard]},
  { path: 'addOfficerData', component: AddOfficerComponent},
  {path: 'viewOfficerValue', component: ViewOfficerComponent, canActivate:[AuthGuard]},
  {path:'addInstituteValue', component: AddInstituteComponent, canActivate:[AuthGuard]},
  {path: 'updateStudent', component: UpdateStudentComponent, canActivate:[AuthGuard]},
  {path: 'StudentLoginkaro', component: StudentLogginComponent},
  {path: 'ministylogin', component: MinistryLoginComponent},
  {path:'viewStudentDataOfficer',component:ViewStudentdataOfficerComponent, canActivate:[AuthGuard]},
  {path:'viewStudentDataMinistry',component:ViewStudentdataMinistryComponent, canActivate:[AuthGuard]},
  {path:'viewStudentByemail',component:ViewStudentByIdComponent, canActivate:[AuthGuard]},
  {path:'viewAllinsiti',component:ViewAllInstitutesComponent, canActivate:[AuthGuard]},
  {path: '', component: HomepageComponent},
  {path:'**',component:PageNotFoundComponent}
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
