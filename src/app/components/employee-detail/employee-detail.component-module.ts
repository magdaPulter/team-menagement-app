import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail.component';
import { TabsetComponentModule } from '../tabset/tabset.component-module';
import { TeamCardComponentModule } from '../team-card/team-card.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { ProjectCardComponentModule } from '../project-card/project-card.component-module';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';
import { ChecklistPipeModule } from 'src/app/pipes/checklist/checklist.pipe-module';

@NgModule({
    imports: [CommonModule, TabsetComponentModule, TeamCardComponentModule, AvatarListComponentModule, ProjectCardComponentModule, DueDatePipeModule, ChecklistPipeModule, EmployeeDetailComponent],
    providers: [],
    exports: [EmployeeDetailComponent]
})
export class EmployeeDetailComponentModule {
}
