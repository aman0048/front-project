import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Student } from '../../myservice.service';

@Component({
  selector: 'app-view-studentdata-ministry',
  templateUrl: './view-studentdata-ministry.component.html',
  styleUrls: ['./view-studentdata-ministry.component.css']
})
export class ViewStudentdataMinistryComponent implements OnInit {
  student: Student;

  constructor(private myservice:MyserviceService, private router:Router) { }
  studentList : Student[];
  ngOnInit(): any {
    this.fetchData();
  }
  fetchData() {
    this.myservice.getAllAcceptedStudent().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.studentList = response;
    console.log(this.studentList);
  }
  grant(grant:Student){
    this.myservice.getGrantScholarship(grant.scholarship.scholarshipId).subscribe(data=>{
      console.log("granting",data);
      alert("Scholarship Granted");
      this.fetchData();
    })
  }
  onSubmit(stud: Student) {
    this.student = stud;
  }

}
