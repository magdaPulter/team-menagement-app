import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectModel } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { DueDatePipe } from '../../pipes/due-date/due-date.pipe';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { NgFor, AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HeaderComponent, NgFor, ProjectCardComponent, AsyncPipe, DueDatePipe]
})
export class ProjectsComponent {
  readonly projects$: Observable<ProjectModel[]> = this._projectService.getAll();

  constructor(private _projectService: ProjectService) {
  }
}
