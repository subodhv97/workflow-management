import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddedUser } from 'src/app/services/added-user';
import { AddeduserService } from 'src/app/services/addeduser.service';


// import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message = '';

  loginData = new AddedUser();

  constructor(private snack: MatSnackBar, private service: AddeduserService, private router: Router) { }

  ngOnInit(): void {
  }


  formSubmit() {


    this.service.loginAddedUser(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        if (this.loginData.role == 'principal') {
          this.router.navigate(['/principal/phome']);
        }
        else if (this.loginData.role == 'hod') {
          this.router.navigate(['/hod/hodhome']);
        }
        else if (this.loginData.role == 'faculty') {
          this.router.navigate(['/faculty/fhome']);
        }
      },
      error => {
        this.message = "Bad credentials!! Role, Email or Password is invalid"
      }
    )
  }
}

