import { Component, OnInit } from '@angular/core';
import { AddeduserService } from 'src/app/services/addeduser.service';

@Component({
  selector: 'app-managefaculty',
  templateUrl: './managefaculty.component.html',
  styleUrls: ['./managefaculty.component.css'],
  providers: [AddeduserService]

})
export class ManagefacultyComponent implements OnInit {

  serviceData: any;
  data: any;

  constructor(private userService: AddeduserService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.userService.getAddedUserData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }

  delete(j: any) {
    this.userService.deleteAddedUserData(j).subscribe(data => {
      this.getData();
    })
  }

  edit() {

  }

}
