import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { User } from '../user';

// import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';

  loginData = new User();

  // public loginData = {
  //   role: '',
  //   username: '',
  //   password: '',
  // };
  // user = new User();

  constructor(private snack: MatSnackBar, private service: UserserviceService, private router: Router) { }

  ngOnInit(): void {
  }


  formSubmit() {


    this.service.loginUser(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        if (this.loginData.role == 'principal') {
          this.router.navigate(['/principal']);
        }
        else if (this.loginData.role == 'hod') {
          this.router.navigate(['/hod']);
        }
        else if (this.loginData.role == 'faculty') {
          this.router.navigate(['/faculty']);
        }
      },
      error => {
        this.message = "Bad credentials!! Role, Email or Password is invalid"
      }
    )
  }
}

