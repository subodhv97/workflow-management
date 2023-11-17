import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addfaculty',
  templateUrl: './addfaculty.component.html',
  styleUrls: ['./addfaculty.component.css']
})
export class AddfacultyComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  addFaculty = new FormGroup({
    fid: new FormControl(""),
    name: new FormControl(""),
    email: new FormControl(""),
    contact: new FormControl(""),
    subject: new FormControl(""),
    education: new FormControl(""),
    experience: new FormControl("")
  });

}
