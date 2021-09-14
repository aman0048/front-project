import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Institution, MyserviceService, Officer } from '../../myservice.service';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css']
})
export class AddInstituteComponent implements OnInit {
  constructor(private myservice: MyserviceService, private router: Router) { }
  officer: Officer;
  ngOnInit(): void {
    this.getofficerstate();
  }

  getofficerstate() {
    this.myservice.getStudentByuserName().subscribe(data => {
      this.handleOfficerReponse(data);
    })
  }
  handleOfficerReponse(response) {
    this.officer = response;
    console.log(this.officer);
    
  }

  institute: Institution = {
    code: null,
    category: "",
    type: "",
    name: "",
    university: "",
    address: "",
    city: "",
    state: "",
    yearOpen: null,
    telephone: "",
    principal: ""
  }

  onSubmitInstitute(addInstitutedata: Institution): any {

    this.institute.state = this.officer.state;

    console.log(this.institute);
    this.myservice.addInstitute(this.institute).subscribe(data => {
      console.log(data)
      alert("Insitute Data Added Sucessfully")
      this.router.navigate(['/viewAllinsiti'])
      
    }, error => {
      if (error.status == 406)
        alert("Entered Field already exist")
      if (error.status == 400)
        alert("Enter Some Fields")
    });
  }
}
