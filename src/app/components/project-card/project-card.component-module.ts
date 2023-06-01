import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressbarPercentageDirectiveModule } from 'src/app/directives/progressbar-percentage/progressbar-percentage.directive-module';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';
import { ProgressBarComponentModule } from '../progress-bar/progress-bar.component-module';
import { ProjectCardComponent } from './project-card.component';

@NgModule({
  imports: [DueDatePipeModule, ProgressbarPercentageDirectiveModule, ProgressBarComponentModule, CommonModule],
  declarations: [ProjectCardComponent],
  providers: [],
  exports: [ProjectCardComponent]
})
export class ProjectCardComponentModule {
}
