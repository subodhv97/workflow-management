import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/services/forum';
import { ForumService } from 'src/app/services/forum.service';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  providers: [ForumService]
})
export class ForumComponent implements OnInit {

  forum: any = new Forum();
  data: any;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.forumService.getForumData().subscribe(data => {
      this.data = data;
    })
  }

  delete(j: any) {
    this.forumService.deleteForum(j).subscribe(data => {
      this.getData();
    })
  }


  forumSubmit() {
    this.forumService.addForum(this.forum).subscribe(
      (data: any) => {
        console.log(data);
        window.alert("Message send")
      },
      (error) => {
        console.log(error);
        window.alert("Something went wrong");
      }
    )
  }

}
