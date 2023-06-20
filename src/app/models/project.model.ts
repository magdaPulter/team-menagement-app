import { EmployeeModel } from "./employee.model";

export interface ProjectModel {
  readonly id: string;
  readonly name: string;
  readonly dueDate: string;
  readonly percentage: number;
  readonly assignees: EmployeeModel[]
}
