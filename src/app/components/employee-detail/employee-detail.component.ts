import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectQueryModel } from 'src/app/query-models/project.query-model';
import { ProjectService } from 'src/app/services/project.service';
import { TasksService } from 'src/app/services/tasks.service';
import { EmployeeModel } from '../../models/employee.model';
import { TeamModel } from '../../models/team.model';
import { EmployeeService } from '../../services/employee.service';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent {
  readonly activatedRoute$: Observable<Params> = this._activatedRoute.params

  readonly employeeDetail$: Observable<EmployeeModel> = this.activatedRoute$.pipe(
    switchMap(params => this._employeeService.getOne(params['id'])),
    shareReplay(1)
  )

  readonly employeeTeam$: Observable<TeamModel[]> = combineLatest([
    this._teamService.getAll(),
    this.employeeDetail$
  ]).pipe(
    map(([teams, employee]) => {
      return teams.filter(teams => teams.members.find(member => member.id === employee.id))
    })
  )

  readonly employeeProjects$: Observable<ProjectQueryModel[]> = combineLatest([
    this._projectService.getAll(),
    this.employeeDetail$,
    this._taskService.getAll(),
    this._taskService.getAllChecklist()
  ]).pipe(
    map(([projects, employee, tasks, checkLists]) => {
      const checkListMap = checkLists.reduce((acc, curr) => {
        return { ...acc, [curr.id]: curr.isDone }
      }, {} as Record<string, boolean>)
      return projects
      .filter(projects => projects.assignees.find(assignee => assignee.id === employee.id))
      .map(project => {
        const taskInProject = tasks.filter(tasks => tasks.projectId === project.id)
        const checkList = taskInProject.map(task => task.checkList.map(cl => checkListMap[cl]))
        const totalCheckList: boolean[] = []
        return {
          id: project.id,
          name: project.name,
          dueDate: project.dueDate,
          percentage: project.percentage,
          assignees: project.assignees,
          checkListBoolean: totalCheckList.concat(...checkList) 
        }
      })
    })
  )

  readonly title$: Observable<string[]> = of(['Teams', 'Projects'])
  
  private _categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('Teams');
  public category$: Observable<string> = this._categorySubject.asObservable();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _teamService: TeamService, 
    private _projectService: ProjectService,
    private _taskService: TasksService) {
  }
  onActivated(title: string){
   this._categorySubject.next(title)
  }
}
