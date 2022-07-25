import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddedUser } from 'src/app/services/added-user';
import { AddeduserService } from 'src/app/services/addeduser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hodaddfaculty',
  templateUrl: './hodaddfaculty.component.html',
  styleUrls: ['./hodaddfaculty.component.css']
})
export class HodaddfacultyComponent implements OnInit {
  addedUser = new AddedUser();
  constructor(private addedUserService: AddeduserService, private snack: MatSnackBar) { }

  ngOnInit(): void {
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
