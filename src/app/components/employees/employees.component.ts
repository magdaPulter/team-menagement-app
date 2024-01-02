import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { AvatarCardComponent } from '../avatar-card/avatar-card.component';
import { NgFor, AsyncPipe } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [HeaderComponent, NgFor, AvatarCardComponent, AsyncPipe]
})
export class EmployeesComponent {
  readonly employees$: Observable<EmployeeModel[]> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {
  }
}
