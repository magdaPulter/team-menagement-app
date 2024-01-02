import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeViewModel } from 'src/app/view-models/employee.view-model';
import { TeamViewModel } from 'src/app/view-models/team.view-model';
import { AvatarListComponent } from '../avatar-list/avatar-list.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-team-card',
    templateUrl: './team-card.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterLink, NgIf, AvatarListComponent]
})
export class TeamCardComponent {
  @Input() title!: string
  @Input() projects!: number
  @Input() members!: number
  @Input() id!: string
  @Input() teamMembers!: EmployeeViewModel[] 
  @Input() isAvatar!: boolean


}
