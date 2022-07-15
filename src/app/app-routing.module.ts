import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HodComponent } from './hod/hod.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'hod', component: HodComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
