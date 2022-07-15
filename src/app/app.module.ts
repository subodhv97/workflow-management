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
import { PrinheaderComponent } from './principal/prinheader/prinheader.component'



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
