import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponentModule } from '../team-card/team-card.component-module';
import { TeamsComponent } from './teams.component';
import { HeaderComponentModule } from '../header/header.component-module';

@NgModule({
  imports: [TeamCardComponentModule, CommonModule, HeaderComponentModule],
  declarations: [TeamsComponent],
  providers: [],
  exports: [TeamsComponent]
})
export class TeamsComponentModule {
}
