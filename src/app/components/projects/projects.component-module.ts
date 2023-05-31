import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponentModule } from '../project-card/project-card.component-module';
import { ProjectsComponent } from './projects.component';
import { ProgressbarPercentageDirectiveModule } from 'src/app/directives/progressbar-percentage/progressbar-percentage.directive-module';
import { HeaderComponentModule } from '../header/header.component-module';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';

@NgModule({
  imports: [ProjectCardComponentModule, CommonModule, DueDatePipeModule, ProgressbarPercentageDirectiveModule, HeaderComponentModule],
  declarations: [ProjectsComponent],
  providers: [],
  exports: [ProjectsComponent]
})
export class ProjectsComponentModule {
}
