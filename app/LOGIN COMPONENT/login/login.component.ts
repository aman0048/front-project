import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService, DAOUser } from '../../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myService: MyserviceService, private router: Router) { }
  user: DAOUser = new DAOUser();
  invalidLogin = false;
  message: string = "Invalid Data";


  
  @Input() error: string = "";
  ngOnInit() {
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
  

  login(loginForm: any) {
    (this.myService.authenticate(loginForm.username, loginForm.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;
        if(error.status == 406)
        alert("Provide Valid Email Id and Password")
        if(error.status == 400)
        alert("Enter Some Fields")
      }
    )
    );
  }
}

