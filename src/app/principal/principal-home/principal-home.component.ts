import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/services/leave.service';
import { MeetingService } from 'src/app/services/meeting.service';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-principal-home',
  templateUrl: './principal-home.component.html',
  styleUrls: ['./principal-home.component.css']
})
export class PrincipalHomeComponent implements OnInit {
  meeting = new Meeting();
  data: any;
  datal: any;
  constructor(private meetingService: MeetingService, private leaveService: LeaveService) { }

  ngOnInit(): void {
    this.getData();
    this.getDatale();
  }

  getData() {
    this.meetingService.getMeetingdata().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

  delete(j: any) {
    this.meetingService.deleteMeeting(j).subscribe(data => {
      this.getData();
    })
  }

  getDatale() {
    this.leaveService.getLeaveData().subscribe((datal: any) => {
      this.datal = datal;
      console.log(this.datal);
    })
  }

  deletele(k: any) {
    this.leaveService.deleteLeave(k).subscribe((datal: any) => {
      this.getData();
    })
  }

}
