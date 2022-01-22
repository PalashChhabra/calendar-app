import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumArray',
})
export class EnumArrayPipe implements PipeTransform {
  transform(data: Object) {
    const keys = Object.keys(data);
    return keys.slice(keys.length / 2);
  }
}
