import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-managefaculty',
  templateUrl: './managefaculty.component.html',
  styleUrls: ['./managefaculty.component.css'],
  providers: [UserserviceService]

})
export class ManagefacultyComponent implements OnInit {

  serviceData: any;
  data: any;

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.getdata().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

  delete(j: any) {
    this.userService.delete(j).subscribe(data => {
      this.getData();
    })
  }

  edit() {

  }

}
