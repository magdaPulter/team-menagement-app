import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'checklist' })
export class ChecklistPipe implements PipeTransform {
  transform(value: boolean[]): string {
    return `${value.filter(v => v === true).length}/${value.length}`
  }
}
