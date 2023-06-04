import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { ProjectModel } from 'src/app/models/project.model';
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
    }),
    shareReplay(1)
  )

  readonly projectInTeam$: Observable<ProjectModel[]> = this.memberTeam$.pipe(
    switchMap((teams) => teams.map(team => team.projects))
  )

  readonly title$: Observable<string[]> = of(['Teams', 'Projects'])
  
  private _categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('Teams');
  public category$: Observable<string> = this._categorySubject.asObservable();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _teamService: TeamService) {
  }
  onActivated(title: string){
   this._categorySubject.next(title)
  }
 

}
