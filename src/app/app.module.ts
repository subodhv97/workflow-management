import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { HodComponent } from './hod/hod.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SidebarComponent } from './principal/sidebar/sidebar.component';
import { PrinheaderComponent } from './principal/prinheader/prinheader.component';
import { HodheaderComponent } from './hod/hodheader/hodheader.component';
import { HodsidebarComponent } from './hod/hodsidebar/hodsidebar.component';
import { FacultysidebarComponent } from './faculty/facultysidebar/facultysidebar.component';
import { FacultyheaderComponent } from './faculty/facultyheader/facultyheader.component';
import { QuestionpaperComponent } from './faculty/questionpaper/questionpaper.component';
import { MeetingnotificationComponent } from './faculty/meetingnotification/meetingnotification.component';
import { ForumComponent } from './faculty/forum/forum.component';
import { LeaveComponent } from './faculty/leave/leave.component';
import { AddfacultyComponent } from './principal/addfaculty/addfaculty.component';
import { ManagefacultyComponent } from './principal/managefaculty/managefaculty.component';
import { CreatemeetingComponent } from './principal/createmeeting/createmeeting.component';
import { LeaveapprovelComponent } from './principal/leaveapprovel/leaveapprovel.component';
import { QpapprovelComponent } from './principal/qpapprovel/qpapprovel.component';
import { RequestleaveComponent } from './hod/requestleave/requestleave.component';
import { ApproveleaveComponent } from './hod/approveleave/approveleave.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PrincipalComponent,
    HodComponent,
    FacultyComponent,
    SignupComponent,
    LoginComponent,
    SidebarComponent,
    PrinheaderComponent,
    HodheaderComponent,
    HodsidebarComponent,
    FacultysidebarComponent,
    FacultyheaderComponent,
    QuestionpaperComponent,
    MeetingnotificationComponent,
    ForumComponent,
    LeaveComponent,
    AddfacultyComponent,
    ManagefacultyComponent,
    CreatemeetingComponent,
    LeaveapprovelComponent,
    QpapprovelComponent,
    RequestleaveComponent,
    ApproveleaveComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
