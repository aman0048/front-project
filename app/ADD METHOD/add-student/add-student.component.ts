import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institution, MyserviceService, Role, Student, StudentLogin } from '../../myservice.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 obj:string;
  constructor(private myservice:MyserviceService, private router: Router) {
    this.obj = sessionStorage.getItem("username");
   }

  instituteList:Institution[];
  ngOnInit(): any {
    this.myservice.getAllInstitute().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.stud.email = this.obj
  }
  handleSuccessfulResponse(response) {
    this.instituteList = response;
    console.log(this.instituteList);
  }

stud:Student = {
    studentId:null,
    fullName:"",
    birthdate: null,
    gender:"",
    mobile:"",
    email:"",
    address:"",
    city:"",
    scholarship:{
      scholarshipId:null,
      scholarshipName:"",
      field: "",
      course:"",
      courseYear:null,
      sscScore: null,
      hscScore: null,
      familyIncome:null,
      bankName:"",
      bankIfsc:"",
      accountNo: "",
      appStatus:"pending",
      approval: "pending",
    },
    institute:{
      code:null,
      category:"",
      type:"",
      name:"",
      university:"",
      address: "",
      city: "",
      state: "",
      yearOpen:null,
      telephone: "",
      principal: ""
    }
}
  onSubmit(addStud:Student):any{
    console.log(this.stud);
     this.myservice.addStudent(this.stud).subscribe(data => {
      console.log(data);
      alert("Student Data Registered Successfully")
      this.router.navigate(['/viewStudentByemail'])
    },error=>{
      if(error.status == 406)
      alert("Entered Field already exist")
      if(error.status == 400)
      alert("Enter Some Fields")
    });
 
  }
}
