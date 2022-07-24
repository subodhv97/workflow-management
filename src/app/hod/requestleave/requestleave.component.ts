import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Leave } from 'src/app/services/leave';
import { LeaveService } from 'src/app/services/leave.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-requestleave',
  templateUrl: './requestleave.component.html',
  styleUrls: ['./requestleave.component.css']
})
export class RequestleaveComponent implements OnInit {

  leave: any = new Leave();
  data: any
  constructor(private leaveService: LeaveService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.leaveService.getLeaveData().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    })
  }

  delete(j: any) {
    this.leaveService.deleteLeave(j).subscribe((data: any) => {
      this.getData();
    })
  }


  getLeave() {
    this.leaveService.addLeave(this.leave).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Requested Successfully', 'Subject is ' + data.subject + ' success');
      },
      (error: any) => {
        console.log(error);
        this.snack.open('Something went wrong !!', 'Ok', { duration: 2000 });
      }
    )
  }
}
