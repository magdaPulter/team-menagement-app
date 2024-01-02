import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ProgressbarPercentageDirective } from '../../directives/progressbar-percentage/progressbar-percentage.directive';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ProgressbarPercentageDirective]
})
export class ProgressBarComponent {
  @Input() percentage!: number
  @Input() isColorChanged!: boolean
}
