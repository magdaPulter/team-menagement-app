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

      const dateMap: Record<string,number[]> ={
        'day': [0, 30],
        'month': [30, 12*30],
        'year': [12*30, Infinity]
      }
      
      const currentDate: Date = new Date()
      const days = (Math.floor((new Date(value).getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24)).toString()
      
      const result: MapModel = Object.entries(dateMap)
      .filter(([_,v]) => +days >= v[0] && +days < v[1])
      .map(([k,v]) => ({
        value: Math.trunc(+days/v[0]),
        name: k
      }))[0]

    return !result.value 
    ? '0 days' 
    : `Due ${result.value} ${result.value === 1 ? result.name : result.name + 's'}`

    }
  }
}