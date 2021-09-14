import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Student } from '../../myservice.service';

@Component({
  selector: 'app-view-student-by-id',
  templateUrl: './view-student-by-id.component.html',
  styleUrls: ['./view-student-by-id.component.css']
})
export class ViewStudentByIdComponent implements OnInit {
  constructor(private myservice:MyserviceService, private router:Router ) { }
  studentList : Student[];
  error = null;
  
  ngOnInit(): any {
    this.myservice.getStudentByEmail().subscribe(
      response => this.handleSuccessfulResponse(response),
      error=>{this.error=error.message}
    );
  }
  handleSuccessfulResponse(response) {
    this.studentList = response;
    console.log(this.studentList);
  }
  update(studentdata: Student) {
    this.myservice.update(studentdata);
    this.router.navigate(['/updateStudent'],{
      queryParams:{studentId:studentdata.studentId}
    }); //updating the employee
  }

}
