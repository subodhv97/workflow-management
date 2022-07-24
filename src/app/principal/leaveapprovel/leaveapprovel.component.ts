import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leaveapprovel',
  templateUrl: './leaveapprovel.component.html',
  styleUrls: ['./leaveapprovel.component.css']
})
export class LeaveapprovelComponent implements OnInit {
  data: any;
  constructor(private leaveService: LeaveService) { }

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
}
