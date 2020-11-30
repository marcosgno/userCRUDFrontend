import { Pipe, PipeTransform, LOCALE_ID } from '@angular/core';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {
    if (value != null) {
      var newVal = value.replace(/\D/g, '');

      newVal = newVal.replace(/\D/g, "");
      newVal = newVal.replace(/(\d{3})(\d)/, "$1.$2");
      newVal = newVal.replace(/(\d{3})(\d)/, "$1.$2");
      newVal = newVal.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

      return newVal;
    } else
      return value;
  }

}
