import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { LowerCasePipe } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [LowerCasePipe]
})
export class HeaderComponent {
  @Input() title!: string
}
