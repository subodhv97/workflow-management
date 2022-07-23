import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-meetingnotification',
  templateUrl: './meetingnotification.component.html',
  styleUrls: ['./meetingnotification.component.css'],
  providers: [MeetingService]
})
export class MeetingnotificationComponent implements OnInit {

  serviceData: any;
  data: any;

  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.getData();
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

}
