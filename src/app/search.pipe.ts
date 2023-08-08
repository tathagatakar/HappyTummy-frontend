import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from './menu';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // Custom search pipe that filters an array of Menu objects based on a filter string.
  // Returns the filtered array of Menu objects.
  transform(search: Menu[], filterString:String) {
    if(search.length==0 || filterString=='')
      return search;
    else
      return search.filter((searchMenu)=>{
        return searchMenu._dishName.toLowerCase().includes(filterString.toLowerCase())
      })
  }
}
