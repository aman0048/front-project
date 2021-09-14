import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Student } from '../../myservice.service';

@Component({
  selector: 'app-view-studentdata-officer',
  templateUrl: './view-studentdata-officer.component.html',
  styleUrls: ['./view-studentdata-officer.component.css']
})
export class ViewStudentdataOfficerComponent implements OnInit {

  constructor(private myservice:MyserviceService, private router:Router) { }
  studentList : Student[];
  ngOnInit(): any {
    this.myservice.getAllStudents().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.studentList = response;
    console.log(this.studentList);
  }
  approve(accept:Student){
    this.myservice.getApproved(accept.scholarship.scholarshipId).subscribe(data=>{
      console.log("accepting",data)

    })
      this.router.navigate(["/viewStudent"]);
  }

  reject(reject:Student){
    this.myservice.getReject(reject.scholarship.scholarshipId).subscribe(data=>{
      console.log("rejecting",data)

    })
      this.router.navigate(["/viewStudent"]);
  }
}
