import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail.component';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { TabsetComponentModule } from '../tabset/tabset.component-module';

@NgModule({
  imports: [CommonModule, AvatarListComponentModule, TabsetComponentModule],
  declarations: [TeamDetailComponent],
  providers: [],
  exports: [TeamDetailComponent]
})
export class TeamDetailComponentModule {
}
