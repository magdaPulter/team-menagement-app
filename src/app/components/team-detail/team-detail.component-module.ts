import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail.component';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { TabsetComponentModule } from '../tabset/tabset.component-module';
import { TeamCardComponentModule } from '../team-card/team-card.component-module';
import { ProjectCardComponentModule } from '../project-card/project-card.component-module';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';

@NgModule({
    imports: [CommonModule, AvatarListComponentModule, TabsetComponentModule, ProjectCardComponentModule, DueDatePipeModule, TeamDetailComponent],
    providers: [],
    exports: [TeamDetailComponent]
})
export class TeamDetailComponentModule {
}
