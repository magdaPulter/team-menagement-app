import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamsComponent {
  readonly teams$: Observable<TeamModel[]> = this._teamService.getAll();

  constructor(private _teamService: TeamService) {
  }
}
