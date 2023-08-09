import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseStringPipe'
})
export class ReverseStringPipePipe implements PipeTransform {

  transform(value: string): any {
    var reverseString="";
    for(var i=0; i<value.length;i++){
      reverseString =value[i]+reverseString;
    }
    return reverseString;
  }

}
