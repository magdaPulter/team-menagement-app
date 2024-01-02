import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'checkListPercent',
    standalone: true
})
export class CheckListPercentPipe implements PipeTransform {
  transform(value: string): number {
    return (+value.slice(0,1) / +value.slice(2,3))*100
  }
}
