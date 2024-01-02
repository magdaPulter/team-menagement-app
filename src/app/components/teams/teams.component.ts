import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamService } from '../../services/team.service';
import { TeamCardComponent } from '../team-card/team-card.component';
import { NgFor, AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HeaderComponent, NgFor, TeamCardComponent, AsyncPipe]
})
export class TeamsComponent {
  readonly teams$: Observable<TeamModel[]> = this._teamService.getAll();

  constructor(private _teamService: TeamService) {
  }
}
