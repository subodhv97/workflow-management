import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  getforum(data: NgForm) {
    console.log(data.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
