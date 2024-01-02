import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeViewModel } from 'src/app/view-models/employee.view-model';
import { TasksModel } from '../../models/tasks.model';
import { TasksService } from '../../services/tasks.service';
import { ChecklistPipe } from '../../pipes/checklist/checklist.pipe';
import { AvatarListComponent } from '../avatar-list/avatar-list.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
    selector: 'app-tasks-card',
    templateUrl: './tasks-card.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ProgressBarComponent, AvatarListComponent, ChecklistPipe]
})
export class TasksCardComponent {
  @Input() title!: string
  @Input() dueDate!: number | string
  @Input() checkList!: boolean[]
  @Input() percentage!: number
  @Input() members!: EmployeeViewModel[]

 
}


