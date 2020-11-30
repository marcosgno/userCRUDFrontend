import { Pipe, PipeTransform, LOCALE_ID } from '@angular/core';

@Pipe({
  name: 'DateBrPipe'
})
export class DateBrPipe implements PipeTransform {

  transform(value: string): string {
    if (value == null){
      value = '';
    }
    var newVal = value.replace(/\D/g, '').substring(0, 8);
    if (newVal.length == 0) {
      newVal = '';
    }
    else {
      newVal = newVal.replace(/(\d{4})(\d{2})(\d{2})/, "$3/$2/$1");
    }

    return newVal;
  }

}
