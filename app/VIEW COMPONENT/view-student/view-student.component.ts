import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Student } from '../../myservice.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  searchvalue: string;
  constructor(private myservice: MyserviceService, private router: Router) { }
  studentList: Student[];
  student: Student;
  error=null;
  ngOnInit(): any {
    this.fetchData();
  }
  fetchData() {
    this.myservice.getStudentByState(sessionStorage.getItem("username")).subscribe(
      response => this.handleSuccessfulResponse(response),
      error=>{this.error="BACKENED STOPPED DUE TO SOME TECHNICAL FAULT"}
    );
  }
  handleSuccessfulResponse(response) {
    this.studentList = response;
    console.log(this.studentList);
  }
  approve(accept: Student) {
    this.myservice.getApproved(accept.scholarship.scholarshipId).subscribe(data => {
      console.log("accepting", data);
      alert("Status Changed to Appoved");
      this.fetchData();

    })
  }

  reject(reject: Student) {
    this.myservice.getReject(reject.scholarship.scholarshipId).subscribe(data => {
      console.log("rejecting", data);
      alert("status changed to Rejected");
      this.fetchData();
    })
  }

  onSubmit(stud: Student) {
    this.student = stud;
  }

  column: string = "studentId";
  order: boolean = false;
  sort(column: string, order: boolean) {
    this.column = column;

    if (this.column == column && this.order == order) {
      this.order = order;
    }
    else {
      this.order = true;
    }
  }

  query() {

  }

}


