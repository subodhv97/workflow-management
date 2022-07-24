import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leave } from './leave';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  leave = new Leave();
  constructor(private http: HttpClient) { }

  public addLeave(leave: Leave) {
    return this.http.post("http://localhost:8080/leave/", leave);
  }

  public getLeaveData() {
    return this.http.get("http://localhost:8080/leave/leaveData/").pipe(map(res => {
      return res;
    }))
  }

  deleteLeave(id: number) {
    return this.http.delete<any>("http://localhost:8080/leave/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
