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
import { LeaveapprovelComponent } from './principal/leaveapprovel/leaveapprovel.component';
import { ManagefacultyComponent } from './principal/managefaculty/managefaculty.component';
import { PrincipalComponent } from './principal/principal.component';
import { QpapprovelComponent } from './principal/qpapprovel/qpapprovel.component';
import { ForumComponent } from './principal/forum/forum.component';
import { PrincipalHomeComponent } from './principal/principal-home/principal-home.component';
import { HodHomeComponent } from './hod/hod-home/hod-home.component';
import { FacultyHomeComponent } from './faculty/faculty-home/faculty-home.component';
import { HodaddfacultyComponent } from './hod/hodaddfaculty/hodaddfaculty.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },

  {
    path: 'home', component: HomeComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  {
    // canActivate: [PrincipalGuard],
    path: 'principal', component: PrincipalComponent, children: [
      { path: 'phome', component: PrincipalHomeComponent },
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
      { path: 'hodhome', component: HodHomeComponent },
      { path: 'addfaculty', component: HodaddfacultyComponent },
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
      { path: 'fhome', component: FacultyHomeComponent },
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
