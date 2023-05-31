import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dueDate' })
export class DueDatePipe implements PipeTransform {
  transform(value: string | number): string {
    const months: string[] = ['Jan', 'Feb', 'Mar','Apr', 'May', 'Jun','Jul', 'Aug', 'Sep','Oct', 'Now', 'Dec']

    const date: Date = 
    typeof(value)==='number' 
    ? new Date(value*1000 )
    : new Date(value)

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}` 
  }
}