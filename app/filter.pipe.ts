import { Pipe, PipeTransform } from '@angular/core';
import { Institution } from './myservice.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // institutes:Institution[];
  // transform(value: any , filterInstitute:string) {
  //  if(value.length === 0 || filterInstitute === '') {
  //    return value;
  //  }
  //  const institutes = [];
  //  for(const institute of value){
  //     if(institute['state']=== filterInstitute){
  //       institutes.push(institute);
  //     }
  //  }
  //  return institutes;
  // }

  transform(insti: Institution[], filterInstitute: string): Institution[] {
    if (!insti || !filterInstitute) {
      return insti;
    }
    return insti.filter(insti1 => insti1.state.toLocaleLowerCase().includes(filterInstitute.toLocaleLowerCase()))
  }



}
