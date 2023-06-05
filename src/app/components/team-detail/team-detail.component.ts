import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { TeamModel } from '../../models/team.model';
import { ProjectModel } from '../../models/project.model';
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
    }))),
    shareReplay(1)
  )

  readonly projectsInTeam$: Observable<ProjectModel[]> = this.teamDetails$.pipe(
    switchMap((teams) => teams.map(team => team.projects))
  )

  readonly title$: Observable<string[]> = of(['Projects'])

  constructor(private _teamService: TeamService, private _activatedRoute: ActivatedRoute) {
  }
}
