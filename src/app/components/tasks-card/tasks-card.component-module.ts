import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksCardComponent } from './tasks-card.component';
import { ChecklistPipeModule } from 'src/app/pipes/checklist/checklist.pipe-module';
import { CheckListPercentPipeModule } from 'src/app/pipes/check-list-percent/check-list-percent.pipe-module';
import { ProgressbarPercentageDirectiveModule } from 'src/app/directives/progressbar-percentage/progressbar-percentage.directive-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { ProgressBarComponentModule } from '../progress-bar/progress-bar.component-module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, ChecklistPipeModule, CheckListPercentPipeModule, ProgressbarPercentageDirectiveModule, AvatarListComponentModule, ProgressBarComponentModule, RouterModule, TasksCardComponent],
    providers: [],
    exports: [TasksCardComponent]
})
export class TasksCardComponentModule {
}
