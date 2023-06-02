import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsetDirectiveModule } from 'src/app/directives/tabset/tabset.directive-module';
import { TabsetComponent } from './tabset.component';

@NgModule({
  imports: [CommonModule, TabsetDirectiveModule],
  declarations: [TabsetComponent],
  providers: [],
  exports: [TabsetComponent]
})
export class TabsetComponentModule {
}
