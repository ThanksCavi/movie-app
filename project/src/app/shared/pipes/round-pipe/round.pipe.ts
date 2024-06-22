import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RoundPipe',
  standalone: true
})
export class RoundPipe implements PipeTransform {

  transform(value: number, digits: number = 1): string {
    return value.toFixed(digits);
  }

}
