import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsetComponent {
  @Input() tabsetTitle!: string[]
  @Output() isActive: EventEmitter<string> = new EventEmitter<string>()
  @Input() categoryTitle!: string


  onCliked(title: string){
    this.isActive.emit(title)
  }
}
