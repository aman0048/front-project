import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService, Student } from '../myservice.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
studentid:string;
  obj1: Student;
  student: Student;
  // message: string;
  constructor(private myservice: MyserviceService, private router: Router,private route:ActivatedRoute) {
   // this.obj1 = this.myservice.updateMethod();
    
  }
  onUpdate(stud: Student): any {
    return this.myservice.onUpdate(this.obj1).subscribe(data => {
      alert("Student Data Updated Successfully")
      console.log("mydata",data);
      this.router.navigate(['/viewStudentByemail'])
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(data=>this.studentid=data.studentId);
    this.myservice.getStudentById(this.studentid).subscribe(data=>{
      this.obj1=data;
    })

  }
  

}
