import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, ProgressBarComponent]
})
export class ProjectCardComponent {
  @Input() title! :string
  @Input() dueDate!: string 
  @Input() percentage!: number
  @Input() isVisible!: boolean
}
