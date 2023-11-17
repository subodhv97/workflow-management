import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  list:any[]=[];
  getLeave(data:NgForm) {
    console.log(data);
  }
  addLeave(item:any) {
    this.list.push(item);
    console.log(this.list);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
