import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  updateStudent: Student;
  user: DAOUser;
  token = null;
  headers_object = new HttpHeaders();
  constructor(private httpService: HttpClient) { }
  authenticate(username: any, password: any) {
    console.log("this is the password", password);
    return this.httpService
      .post<any>("http://localhost:8586/authenticate", { username, password })
      .pipe(
        map(userData => {
          console.log(userData.token)
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          sessionStorage.setItem("role", userData.role);
          console.log("token", sessionStorage.getItem("token"))
          return userData;
        })
      );
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    // console.log(user);
    // console.log(!(user === null));
    return !(user === null);
  }

  isStudentLoggedIn() {
    let role = sessionStorage.getItem("role");
    if (role == "STUDENTROLE") {
      return true;
    }
    return false;
  }
  isOfficerLoggedIn() {
    let role = sessionStorage.getItem("role");
    if (role == "OFFICERROLE") {
      return true;
    }
    return false;
  }
  isMinistryLoggedIn() {
    let role = sessionStorage.getItem("role");
    if (role == "MINISTRYROLE") {
      return true;
    }
    return false;
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.clear();
  }

  public addStudent(addstud: Student) {
    console.log("ins service add");
    console.log(addstud);
    // let id:string = addstud.studentId.toString();
    // sessionStorage.setItem("studentId",id);
    //  sessionStorage.setItem("name",addstud.fullName);

    return this.httpService.post("http://localhost:8586/studentManagement/StudentCreation", addstud);
  }

  public addOfficer(addofficer: Officer) {
    console.log("ins service add");
    console.log(addofficer);
    return this.httpService.post("http://localhost:8586/officerManagement/OfficerCreation", addofficer);
  }

  public addStudentLogin(studLogin: StudentLogin) {
    console.log("ins service add");
    console.log(studLogin);
    return this.httpService.post("http://localhost:8586/studentLoginController/StudentLogin", studLogin);
  }
  public addInstitute(addinsti: Institution) {
    console.log("ins service add");
    console.log(addinsti);
    return this.httpService.post("http://localhost:8586/InstituteManagement/addingInstitute", addinsti);
  }
  public addMinister(ministerlogin: Ministry) {
    console.log("ins service add");
    console.log(ministerlogin);
    return this.httpService.post("http://localhost:8586/ministryManagement/ministryCreation", ministerlogin);
  }
  public getStudentByEmail() {
    let email = sessionStorage.getItem("username");
    console.log(email);
    return this.httpService.get<Student>("http://localhost:8586/studentManagement/GetStudentsByEmail/" + email);
  }

  public getStudentByuserName() {
    let email = sessionStorage.getItem("username");
    // console.log(email);
    return this.httpService.get<Officer>("http://localhost:8586/officerManagement/GetOfficerByUsername/" + email);
  }

  public getAllAcceptedStudent() {
    return this.httpService.get<Student>("http://localhost:8586/studentManagement/GetAllAcceptedStudents");
  }

  public getStudentById(studentId:string) {

    return this.httpService.get<Student>("http://localhost:8586/studentManagement/getStudentById/"+studentId);
  }

  public userEmail() {
    let username = sessionStorage.getItem("username");
  }

  public getAllOfficer() {
    console.log("ins service get officer");//headers
    return this.httpService.get<Student>("http://localhost:8586/officerManagement/GetAllOfficers");
  }
  public getAllInstitute() {
    console.log("ins service get institute");//headers
    return this.httpService.get<Student>("http://localhost:8586/InstituteManagement/getAllInstitution");
  }

  public getAllStudents() {
    console.log("ins service get student");//headers
    return this.httpService.get<Student>("http://localhost:8586/studentManagement/GetAllStudents");
  }
  public getStudentByState(OfficerEmail:string) {
    console.log("ins service get student");//headers
    return this.httpService.get<Student>("http://localhost:8586/studentManagement/GetStudentsByState/"+OfficerEmail);
  }
  public update(updateStudent: Student) {
    this.updateStudent = updateStudent;
  }
  public updateMethod() {
    return this.updateStudent;
  }
  public onUpdate(updatestudent: Student) {
    console.log("ins service update");
    return this.httpService.put("http://localhost:8586/studentManagement/StudentEdit", updatestudent);
  }

  public getApproved(id: number) {
    console.log("get approved status student");//headers
    return this.httpService.get<Student>("http://localhost:8586/officerManagement/UpdateScholarshipInfoForAccept/" + id);
  }
  public getReject(id: number) {
    console.log("get reject status student");//headers
    return this.httpService.get<Student>("http://localhost:8586/officerManagement/UpdateScholarshipInfoForReject/" + id);
  }

  public getGrantScholarship(id: number) {
    console.log("get approved status student");//headers
    return this.httpService.get<Student>("http://localhost:8586/ministryManagement/UpdateScholarshipInfo/" + id);
  }
}

export class Officer {
  officerId: number;
  officerName: string;
  state: string
  user: DAOUser;
}

export class Institution {
  code: number;
  category: string;
  type: string;
  name: string;
  university: string;
  address: string;
  city: string;
  state: string;
  yearOpen: number;
  telephone: string;
  principal: string;
}

export class Scholarship {
  scholarshipId: number;
  scholarshipName: string;
  field: string;
  course: string;
  courseYear: number;
  sscScore: number;
  hscScore: number;
  familyIncome: number;
  bankName: string;
  bankIfsc: string;
  accountNo: string;
  appStatus: string;
  approval: string;
}

export class Student {
  studentId: number;
  fullName: string;
  birthdate: any;
  gender: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  scholarship: Scholarship;
  institute: Institution;
}

export class DAOUser {
  id: number;
  username: string;
  password: string;
  role: Role;
}

export enum Role {
  STUDENTROLE,
  OFFICERROLE,
  MINISTRYROLE
}

export class Ministry {
  ministryId: number;
  user: DAOUser;
}

export class StudentLogin {
  id: number;
  user: DAOUser;
}
