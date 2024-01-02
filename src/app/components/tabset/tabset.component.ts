import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { NgFor, NgStyle, NgClass } from '@angular/common';


@Component({
    selector: 'app-tabset',
    templateUrl: './tabset.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, NgStyle, NgClass]
})
export class TabsetComponent {
  @Input() tabsetTitle!: string[]
  @Output() isActive: EventEmitter<string> = new EventEmitter<string>()
  @Input() categoryTitle!: string


  onCliked(title: string){
    this.isActive.emit(title)
  }
}
