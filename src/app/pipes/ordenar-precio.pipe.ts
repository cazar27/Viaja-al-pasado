import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPrecioPipe implements PipeTransform {

  transform(array: any[], arg?: any): any {

    if (arg === 1) {

      array.sort((b: any, a: any) => {
        if (a.price > b.price) {
          return -1;

        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      });

      return array;
    } else if (arg === 2) {

      array.sort((b: any, a: any) => {
        if (a.likes < b.likes) {
          return -1;

        } else if (a.likes > b.likes) {
          return 1;
        } else {
          return 0;
        }
      });

      return array;
    } else {
      return array;
    }

  }
}
