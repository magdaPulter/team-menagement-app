import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsetComponent {
  @Input() tabsetTitle!: string[]
  @Input() isActive!: boolean


}
