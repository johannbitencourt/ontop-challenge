import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayByLength'
})
export class ArrayByLengthPipe implements PipeTransform {

  transform(count: number): number[] {
    return Array.from({ length: count });
  }
}
