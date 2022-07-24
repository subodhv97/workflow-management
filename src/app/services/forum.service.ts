import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';
import { Forum } from './forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  forum = new Forum();

  constructor(private http: HttpClient) { }

  public addForum(forum: Forum) {
    return this.http.post("http://localhost:8080/forum/", forum);
  }

  public getForumData() {
    return this.http.get("http://localhost:8080/forum/forumData/").pipe(map(res => {
      return res;
    }))
  }

  deleteForum(id: number) {
    return this.http.delete<any>("http://localhost:8080/forum/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
