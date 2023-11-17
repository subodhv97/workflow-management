import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserserviceService, private snack: MatSnackBar) { }

  public user = {
    role: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: Date,
    gender: "",
    profile: "",
    password: "",



  };

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);
    if (this.user.role == "Select Role" || this.user.role == "") {
      // alert("Select Role");
      this.snack.open("Select Role", "Ok", { duration: 3000, panelClass: ['red-snackbar'] })
      return;
    } else if (this.user.firstName == '') {

      this.snack.open("FirstName is required", "Ok", { duration: 3000 })
      return;
    } else if (this.user.userName == '' || this.user.userName == null) {
      this.snack.open("Username is required", "Ok", { duration: 3000 });
      return;
    }
    else if (this.user.email == '') {
      this.snack.open("Email field is required", "Ok", { duration: 3000 });
      return;
    } else if (this.user.phone == null || this.user.phone == "") {
      this.snack.open("Phone number is required", "Ok", { duration: 3000 });
      return;
    } else if (this.user.dob == null) {
      this.snack.open("Date of birth is required", "Ok", { duration: 3000 });
      return;
    }
    else if (this.user.gender == '') {
      this.snack.open("Gender is required", "Ok", { duration: 3000 });
      return;
    } else if (this.user.password == '') {
      this.snack.open("Password is required", "Ok", { duration: 3000 });
      return;
    }

    // add user: userservices
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Registered Successfully', 'user name is ' + data.firstName + ' ' + data.lastName, 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong !!', 'Ok', { duration: 2000 });
      }
    )

  }

}
