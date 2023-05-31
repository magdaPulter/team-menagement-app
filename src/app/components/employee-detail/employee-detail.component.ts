import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { TeamModel } from '../../models/team.model';
import { EmployeeService } from '../../services/employee.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent {
  readonly activatedRoute$: Observable<Params> = this._activatedRoute.params

  readonly employeeDetail$: Observable<EmployeeModel[]> = this.activatedRoute$.pipe(
    switchMap(param => this._employeeService.getAll().pipe(map((employees) => {
      return employees.filter(employee => employee.id === param['id'])
    })))
  )

  readonly memberTeam$: Observable<TeamModel[]> = combineLatest([
    this._teamService.getAll(),
    this.activatedRoute$
  ]).pipe(
    map(([teams, params]) => {
      return teams.filter(team => team.members.find(member => member.id.toString() === params['id']))
    })
  )

  constructor(
    private _activatedRoute: ActivatedRoute, 
    private _employeeService: EmployeeService, 
    private _teamService: TeamService) {
     
    }
}
