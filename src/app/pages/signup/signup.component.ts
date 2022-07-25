import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddedUser } from 'src/app/services/added-user';
import { AddeduserService } from 'src/app/services/addeduser.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import Swal from 'sweetalert2';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserserviceService, private snack: MatSnackBar, private addedUserService: AddeduserService) { }

  user = new User();
  addedUser = new AddedUser();

  ngOnInit(): void {
  }

  formSubmit() {
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Registered Successfully', 'user name is ' + data.firstname + ' ' + data.lastname, 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong !!', 'Ok', { duration: 2000 });
      }
    )

  }


  addedUserSubmit() {
    this.addedUserService.addAddedUser(this.addedUser).subscribe(
      (data: any) => {
        Swal.fire('Registered Successfully', 'Welcome ' + data.name + ' in our team on  ' + data.role + ' position :)', 'success');
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong !!', 'Ok', { duration: 2000 });
      }
    )
  }
}

