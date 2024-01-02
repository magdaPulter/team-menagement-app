import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { TeamModel } from '../../models/team.model';
import { ProjectModel } from '../../models/project.model';
import { TeamService } from '../../services/team.service';
import { ProjectService } from 'src/app/services/project.service';
import { DueDatePipe } from '../../pipes/due-date/due-date.pipe';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { TabsetComponent } from '../tabset/tabset.component';
import { AvatarListComponent } from '../avatar-list/avatar-list.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-team-detail',
    templateUrl: './team-detail.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, AvatarListComponent, TabsetComponent, NgFor, ProjectCardComponent, AsyncPipe, DueDatePipe]
})
export class TeamDetailComponent {

  readonly activatedRoute$: Observable<Params> = this._activatedRoute.params

  readonly teamDetails$: Observable<TeamModel> = this.activatedRoute$.pipe(
    switchMap(param => this._teamService.getOne(param['id'])
    ),
    shareReplay(1)
  )
  readonly projectsInTeam$: Observable<ProjectModel[]> = combineLatest([
    this.teamDetails$,
    this._projectService.getAll()
  ]).pipe(
    map(([team, projects]) => {
      const projectInTeamId = team.projects.map(p => p.id)
      return projects.filter(p => projectInTeamId.includes(p.id))
    }))

  readonly title$: Observable<string[]> = of(['Projects'])

  constructor(
    private _teamService: TeamService, 
    private _projectService: ProjectService,
    private _activatedRoute: ActivatedRoute) {
  }
}
