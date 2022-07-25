import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/services/leave.service';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-faculty-home',
  templateUrl: './faculty-home.component.html',
  styleUrls: ['./faculty-home.component.css']
})
export class FacultyHomeComponent implements OnInit {
  data: any;
  data1: any;
  constructor(private leaveService: LeaveService, private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.getData();
    this.getData1();
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


  getData1() {
    this.meetingService.getMeetingdata().subscribe(data1 => {
      this.data1 = data1;
      console.log(this.data1);
    })
  }

  delete1(j: any) {
    this.meetingService.deleteMeeting(j).subscribe(data1 => {
      this.getData1();
    })
  }
}
