import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitDays',
})
export class SplitDaysPipe implements PipeTransform {
  transform(array: any[]) {
    return array.reduce(
      (result: any, item: any, index: number) =>
        index % 7
          ? result
          : [
              ...result,
              [
                item,
                array[index + 1],
                array[index + 2],
                array[index + 3],
                array[index + 4],
                array[index + 5],
                array[index + 6],
              ],
            ],
      []
    );
  }
}
