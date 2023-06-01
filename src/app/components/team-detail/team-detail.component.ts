import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { ProjectModel } from 'src/app/models/project.model';
import { TeamModel } from '../../models/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamDetailComponent {

  readonly activatedRoute$: Observable<Params> = this._activatedRoute.params

  readonly teamDetails$: Observable<TeamModel[]> = this.activatedRoute$.pipe(
    switchMap(param => this._teamService.getAll().pipe(map((teams) => {
      return teams.filter(team => team.id === param['id'])
    })))
  )

  readonly projectsInTeam$: Observable<ProjectModel[]> = this.teamDetails$.pipe(
    switchMap((teams) => teams.map(team => team.projects))
  )

  constructor(private _teamService: TeamService, private _activatedRoute: ActivatedRoute) {
    // this.teamDetails$.subscribe(value => console.log(value.map(v => v.projects)))
  }
}
