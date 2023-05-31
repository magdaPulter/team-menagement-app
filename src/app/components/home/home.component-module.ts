import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponentModule } from '../teams/teams.component-module';
import { EmployeesComponentModule } from '../employees/employees.component-module';
import { TeamCardComponentModule } from '../team-card/team-card.component-module';
import { HomeComponent } from './home.component';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';

@NgModule({
  imports: [TeamsComponentModule, EmployeesComponentModule, TeamCardComponentModule, CommonModule, AvatarCardComponentModule],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
