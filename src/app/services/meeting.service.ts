import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meeting } from '../principal/meeting';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  meeting = new Meeting();

  constructor(private http: HttpClient) { }


  public addMeeting(meeting: Meeting) {
    return this.http.post("http://localhost:8080/meeting/", meeting);
  }

  public getMeetingdata() {
    return this.http.get("http://localhost:8080/meeting/meetingData").pipe(map(res => {
      return res;
    }))
  }

  deleteMeeting(id: number) {
    return this.http.delete<any>("http://localhost:8080/meeting/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
