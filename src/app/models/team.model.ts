import { EmployeeModel } from "./employee.model";

export interface TeamModel {
  readonly name: string;
  readonly description: string;
  readonly members: EmployeeModel[];
  readonly projects: string[];
  readonly id: string;
}
