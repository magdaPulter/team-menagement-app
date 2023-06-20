import { EmployeeQueryModel } from "./employee.query-model";

export interface ProjectQueryModel {
  readonly id: string;
  readonly name: string;
  readonly dueDate: string;
  readonly percentage: number;  
  readonly assignees: EmployeeQueryModel[];
  readonly checkListBoolean: boolean[];
}
