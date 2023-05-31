import { EmployeeModel } from "../models/employee.model";

export interface TeamViewModel {
  readonly name: string;
  readonly members: EmployeeModel[];
  readonly projects: string[];
}
