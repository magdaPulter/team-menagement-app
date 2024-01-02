import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { TeamModel } from 'src/app/models/team.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { TeamService } from 'src/app/services/team.service';
import { AvatarCardComponent } from '../avatar-card/avatar-card.component';
import { TeamCardComponent } from '../team-card/team-card.component';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, TeamCardComponent, AvatarCardComponent, AsyncPipe]
})
export class HomeComponent {

  readonly teams$: Observable<TeamModel[]> = this._teamService.getAll();
  readonly employees$: Observable<EmployeeModel[]> = this._employeeService.getAll();

  constructor(
    private _teamService: TeamService, 
    private _employeeService: EmployeeService) {
  }

}
