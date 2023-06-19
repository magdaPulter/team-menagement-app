import { Pipe, PipeTransform } from '@angular/core';
import { MapModel } from 'src/app/models/map.model';

@Pipe({ name: 'dueDate' })
export class DueDatePipe implements PipeTransform {
  transform(value: string | number, format: string): string {

    if (format === 'fullDate') {
      const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Dec']

      const date: Date =
        typeof (value) === 'number'
          ? new Date(value * 1000)
          : new Date(value)
      return `Due on ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    } else {

      const currentDate: Date = new Date()
      const days = (Math.floor((new Date(value).getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24))

    return days===1 ? `Due 1 day` : `Due ${days} days`
    }
  }
}