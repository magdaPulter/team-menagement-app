import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { EmployeesComponent } from './employees.component';
import { HeaderComponentModule } from '../header/header.component-module';

@NgModule({
  imports: [AvatarCardComponentModule, CommonModule, HeaderComponentModule],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent]
})
export class EmployeesComponentModule {
}
