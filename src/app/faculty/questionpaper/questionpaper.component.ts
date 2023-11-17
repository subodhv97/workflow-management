import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-questionpaper',
  templateUrl: './questionpaper.component.html',
  styleUrls: ['./questionpaper.component.css']
})
export class QuestionpaperComponent implements OnInit {
  getData(data:NgForm)
  {
    console.log(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
