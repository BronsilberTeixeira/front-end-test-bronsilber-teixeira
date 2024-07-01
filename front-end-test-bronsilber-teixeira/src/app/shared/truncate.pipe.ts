import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxLength: number, suffix: string = '...'): string {
    if (!value) {
      return '';
    }

    if (value.length <= maxLength) {
      return value;
    }

    return value.substring(0, maxLength - suffix.length) + suffix;
  }

}