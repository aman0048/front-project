import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Officer, Role } from '../../myservice.service';

@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.css']
})
export class AddOfficerComponent implements OnInit {

  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  officer: Officer = {
    officerId: null,
    officerName: "",
    state: "",
    user: {
      id: null,
      username: "",
      password: "",
      role: Role.OFFICERROLE
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

  onSubmitOfficer(addOfficerdata: Officer): any {
    console.log(this.officer);
    this.myservice.addOfficer(this.officer).subscribe(data => {
      console.log(data)
      alert("Officer Added Sucessfully")
      this.router.navigate(['/login'])
    },error=>{
      if(error.status == 406)
      alert("Officer With Email Already exist")
      if(error.status == 400)
      alert("Provide Some Fields")
    });
   
  }

}
