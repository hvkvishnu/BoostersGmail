import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args?: any): any {

    if(!value) {return [];}
    if(!args) {return value;}

    args = (args as String).toLowerCase();
    //console.log(args)

    return value.filter( (item) => 
                          {  return (JSON.stringify(item)).toLowerCase().includes(args);  }
        );

  }

}


// console.log(((JSON.stringify(item)).toLowerCase()).includes(args));