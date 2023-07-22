import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByOrder'
})
export class SortByOrderPipe implements PipeTransform {
  transform(items: any[]) {
    return items?.sort((n1,n2) => 
    {
      return n1.order - n2.order; 
    });
  }

}
