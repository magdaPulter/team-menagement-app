import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { EmployeeViewModel } from 'src/app/view-models/employee.view-model';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarListComponent {
  @Input() members!: EmployeeViewModel[] 
}
