import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Officer, Role, StudentLogin } from '../../myservice.service';

@Component({
  selector: 'app-student-loggin',
  templateUrl: './student-loggin.component.html',
  styleUrls: ['./student-loggin.component.css']
})
export class StudentLogginComponent implements OnInit {

  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  student: StudentLogin = {
    id:null,
    user: {
      id: null,
      username: "",
      password: "",
      role: Role.STUDENTROLE
    }
  }

  state = false;
  togglePassword(){
    if(this.state){
      document.getElementById("form2Example29").setAttribute("type","password");
      this.state =false;
    }else{
      document.getElementById("form2Example29").setAttribute("type","text");
      this.state =true;
    }
  }

  studentLoginButton(addStudentdata: StudentLogin): any {
    console.log(this.student);
    this.myservice.addStudentLogin(this.student).subscribe(data => {
      console.log(data);
      alert("Student Registered Successfully");
      this.router.navigate(['/login'])
    },error=>{
      if(error.status == 406)
      alert("Student With Email Already exist")
      if(error.status == 400)
      alert("Provide Some Fields")
    });

  }

}
