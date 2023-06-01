import { EmployeeQueryModel } from "./employee.query-model";

export interface TasksQueryModel {
  readonly name: string;
  readonly dueDate: number;
  readonly checkListBoolean: boolean[];
  readonly members: EmployeeQueryModel[]
}
