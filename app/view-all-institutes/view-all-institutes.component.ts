import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institution, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-view-all-institutes',
  templateUrl: './view-all-institutes.component.html',
  styleUrls: ['./view-all-institutes.component.css']
})
export class ViewAllInstitutesComponent implements OnInit {
  filterInstitute:string;
  constructor(private myservice:MyserviceService, private router:Router ) { }
  instituteList:Institution[];
  ngOnInit(): any {
    this.myservice.getAllInstitute().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.instituteList= response;
    console.log(this.instituteList);
  }

}
