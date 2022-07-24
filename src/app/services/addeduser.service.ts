import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AddedUser } from './added-user';

@Injectable({
  providedIn: 'root'
})
export class AddeduserService {

  addedUser: any = new AddedUser();
  data: any;

  constructor(private http: HttpClient) { }


  public addAddedUser(addedUser: AddedUser) {
    return this.http.post("http://localhost:8080/addedUser/", addedUser);
  }


  public loginAddedUser(addedUser: AddedUser) {
    return this.http.post("http://localhost:8080/addedUser/addedLogin/", addedUser);
  }



  public getAddedUserData() {
    return this.http.get("http://localhost:8080/addedUser/addedUserData/").pipe(map(res => {
      return res;
    }))
  }

  deleteAddedUserData(id: number) {
    return this.http.delete<any>("http://localhost:8080/addedUser/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
