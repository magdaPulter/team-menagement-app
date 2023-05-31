import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgressbarPercentageDirectiveModule } from 'src/app/directives/progressbar-percentage/progressbar-percentage.directive-module';
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  imports: [CommonModule, ProgressbarPercentageDirectiveModule],
  declarations: [ProgressBarComponent],
  providers: [],
  exports: [ProgressBarComponent]
})
export class ProgressBarComponentModule {
}
