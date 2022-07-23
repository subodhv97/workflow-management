import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { LeaveComponent } from './faculty/leave/leave.component';
import { MeetingnotificationComponent } from './faculty/meetingnotification/meetingnotification.component';
import { QuestionpaperComponent } from './faculty/questionpaper/questionpaper.component';
import { AddfacultyComponent } from './principal/addfaculty/addfaculty.component';
import { ApproveleaveComponent } from './hod/approveleave/approveleave.component';
import { HodComponent } from './hod/hod.component';
import { RequestleaveComponent } from './hod/requestleave/requestleave.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreatemeetingComponent } from './principal/createmeeting/createmeeting.component';
// import { CreatemeetingComponent } from './principal/createmeeting/createmeeting.component';
import { ForumComponent } from './principal/forum/forum.component';
import { LeaveapprovelComponent } from './principal/leaveapprovel/leaveapprovel.component';
import { ManagefacultyComponent } from './principal/managefaculty/managefaculty.component';
import { PrincipalComponent } from './principal/principal.component';
import { QpapprovelComponent } from './principal/qpapprovel/qpapprovel.component';
// import { FacultyGuard } from './services/faculty.guard';
// import { HodGuard } from './services/hod.guard';
// import { PrincipalGuard } from './services/principal.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    // canActivate: [PrincipalGuard],
    path: 'principal', component: PrincipalComponent, children: [
      { path: 'addfaculty', component: AddfacultyComponent },
      { path: 'createmeting', component: CreatemeetingComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'leaveapprovel', component: LeaveapprovelComponent },
      { path: 'managefaculty', component: ManagefacultyComponent },
      { path: 'qpappeovel', component: QpapprovelComponent },

    ]
  },
  {
    // canActivate: [HodGuard],
    path: 'hod', component: HodComponent, children: [
      { path: 'addfaculty', component: AddfacultyComponent },
      { path: 'approveleave', component: ApproveleaveComponent },
      { path: 'createmeeting', component: CreatemeetingComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'meetingnotifiation', component: MeetingnotificationComponent },
      { path: 'requestleave', component: RequestleaveComponent },

    ]
  },
  {
    // canActivate: [FacultyGuard],
    path: 'faculty', component: FacultyComponent, children: [
      { path: 'forum', component: ForumComponent },
      { path: 'leave', component: LeaveComponent },
      { path: 'metingnotifiation', component: MeetingnotificationComponent },
      { path: 'addqp', component: QuestionpaperComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
