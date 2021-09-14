import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Officer } from '../../myservice.service';

@Component({
  selector: 'app-view-officer',
  templateUrl: './view-officer.component.html',
  styleUrls: ['./view-officer.component.css']
})
export class ViewOfficerComponent implements OnInit {

  constructor(private myservice:MyserviceService, private router:Router ) { }
  OfficerList : Officer[];
  ngOnInit(): any {
    this.myservice.getAllOfficer().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.OfficerList = response;
    console.log(this.OfficerList);
  }


}
