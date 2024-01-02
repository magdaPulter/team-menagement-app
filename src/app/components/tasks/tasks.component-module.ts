import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksCardComponentModule } from '../tasks-card/tasks-card.component-module';
import { TasksComponent } from './tasks.component';
import { ChecklistPipeModule } from 'src/app/pipes/checklist/checklist.pipe-module';
import { CheckListPercentPipeModule } from 'src/app/pipes/check-list-percent/check-list-percent.pipe-module';
import { HeaderComponentModule } from '../header/header.component-module';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';

@NgModule({
    imports: [TasksCardComponentModule, CommonModule, ChecklistPipeModule, CheckListPercentPipeModule, HeaderComponentModule, DueDatePipeModule, TasksComponent],
    providers: [],
    exports: [TasksComponent]
})
export class TasksComponentModule {
}
