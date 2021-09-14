import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, Ministry, Role } from '../../myservice.service';

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})
export class MinistryLoginComponent implements OnInit {

  constructor(private myservice: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  minister: Ministry = {
    ministryId:null,
    user: {
      id: null,
      username: "",
      password: "",
      role: Role.MINISTRYROLE
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

  MinisterLoginButton(addMinistrydata: Ministry): any {
    console.log(this.minister);
    this.myservice.addMinister(this.minister).subscribe(data => {
      console.log(data);
      alert("Minister Registered Successfully");
      this.router.navigate(['/login'])
    },error=>{
      if(error.status == 406)
      alert("Ministry With Email Already exist")
      if(error.status == 400)
      alert("Provide Some Fields")
    });
    
  }

}
