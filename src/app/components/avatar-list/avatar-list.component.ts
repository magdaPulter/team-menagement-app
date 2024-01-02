import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { EmployeeViewModel } from 'src/app/view-models/employee.view-model';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-avatar-list',
    templateUrl: './avatar-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, RouterLink]
})
export class AvatarListComponent {
  @Input() members!: EmployeeViewModel[] 
}
