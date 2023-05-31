import { EmployeeModel } from "../models/employee.model";

export interface TasksQueryModel {
  readonly name: string;
  readonly dueDate: number;
  readonly checkListBoolean: boolean[];
  readonly members: EmployeeModel[]
}
