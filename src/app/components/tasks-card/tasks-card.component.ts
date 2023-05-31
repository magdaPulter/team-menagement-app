import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeViewModel } from 'src/app/view-models/employee.view-model';
import { TasksModel } from '../../models/tasks.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksCardComponent {
  @Input() title!: string
  @Input() dueDate!: number
  @Input() checkList!: boolean[]
  @Input() percentage!: number
  @Input() members!: EmployeeViewModel[]

 
}


