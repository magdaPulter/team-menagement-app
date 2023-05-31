import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail.component';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { TabsetComponentModule } from '../tabset/tabset.component-module';
import { TeamCardComponentModule } from '../team-card/team-card.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';

@NgModule({
  imports: [CommonModule, TabsetComponentModule, TeamCardComponentModule, AvatarListComponentModule],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent]
})
export class EmployeeDetailComponentModule {
}
