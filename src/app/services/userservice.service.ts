import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
// import 'rxjs/operators/map'
import { User } from '../pages/user';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  dataarray = [];
  constructor(private http: HttpClient) {

  }

  //SignUp service
  public addUser(user: User) {
    return this.http.post(`${baseUrl}/`, user);
  }

  // loginservice
  public loginUser(user: User) {
    return this.http.post(`${baseUrl}/login/`, user);
  }


  public getdata() {
    return this.http.get(`${baseUrl}/userData/`).pipe(map(res => {
      return res;
    }))
  }

  delete(id: number) {
    return this.http.delete<any>(`${baseUrl}/` + id).pipe(map((res: any) => {
      return res;
    }))
  }


  updatefaculty(data: any, id: number) {
    return this.http.put<any>(`${baseUrl}/` + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
}
