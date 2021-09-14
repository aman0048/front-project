import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './myservice.service';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  // transform(student: Student[], column: string, order: boolean): Student[] {
  //   if (column == undefined)
  //     return student;
  //   let result: any[];
  //   result = this.ascending(student, column);
  //   return result;
  // }

  transform(values: any, key:string, reverse:boolean) {
    if (!Array.isArray(values) || values.length <= 0) {
      return null;
    }

    return this.sort(values, key, reverse);
  }

  private sort(student: Student[], key?: any, reverse?: boolean): any[] {
    const isInside = key && key.indexOf('.') !== -1;

    if (isInside) {
      key = key.split('.');
    }

    const array: any[] = student.sort((a: any, b: any): number => {
      if (!key) {
        return a > b ? 1 : -1;
      }

      if (!isInside) {
        return a[key] > b[key] ? 1 : -1;
      }

      return this.getValue(a, key) > this.getValue(b, key) ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }

    return array;
  }
  
  ascending(arr: any[], column: string) { //ascending method to sort the array in ascending order when clicked on the heading
    arr.sort((a: any, b: any) => {
      if (a[column] > b[column]) {
        return 1;
      }
      return -1;
    });
    return arr;
  }
  private getValue(object: any, key: string[]) {
    for (let i = 0, n = key.length; i < n; ++i) {
      const k = key[i];
      if (!(k in object)) {
        return;
      }

      object = object[k];
    }

    return object;
  }
}
