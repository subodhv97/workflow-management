import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { AddedUser } from 'src/app/services/added-user';
import { AddeduserService } from 'src/app/services/addeduser.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css'],
  providers: [AddeduserService]
})
export class AddfacultyComponent implements OnInit {

  addedUser: any = new AddedUser();

  constructor(private addedUserService: AddeduserService, private snack: MatSnackBar) { }

  ngOnInit(): void { }

  addedUserSubmit() {
    this.addedUserService.addAddedUser(this.addedUser).subscribe(
      (data: any) => {
        Swal.fire('Registered Successfully', 'Welcome ' + data.name + ' in our team on  ' + data.role + ' position :)');
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong !!', 'Ok', { duration: 2000 });
      }
    )
  }






}
