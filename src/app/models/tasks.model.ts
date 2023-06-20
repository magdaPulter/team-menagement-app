export interface TasksModel {
  readonly name: string;
  readonly dueDate: number;
  readonly checkList: string[];
  readonly assigneeIds: string[];
  readonly projectId: string;
}
