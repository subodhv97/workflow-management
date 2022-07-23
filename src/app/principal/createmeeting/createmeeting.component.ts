import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MeetingService } from 'src/app/services/meeting.service';
import Swal from 'sweetalert2';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-createmeeting',
  templateUrl: './createmeeting.component.html',
  styleUrls: ['./createmeeting.component.css'],
  providers: [MeetingService]
})
export class CreatemeetingComponent implements OnInit {

  meeting = new Meeting();
  data: any;


  constructor(private meetingService: MeetingService, private snack: MatSnackBar) { }

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


  meetingSubmit() {
    this.meetingService.addMeeting(this.meeting).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Created Successfully', 'Subject is ' + data.subject + ' success');
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong !!', 'Ok', { duration: 2000 });
      }
    )
  }
}
