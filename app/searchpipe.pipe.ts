import { Pipe, PipeTransform } from '@angular/core';
import { Scholarship, Student } from './myservice.service';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(scholarship: Student[],searchvalue:string): Student[] {
    if(!scholarship || !searchvalue){
      return scholarship;
    }
    return scholarship.filter(scholarship1 => scholarship1.scholarship.scholarshipName.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()));
  }

}
