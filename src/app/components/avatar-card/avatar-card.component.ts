import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-avatar-card',
    templateUrl: './avatar-card.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterLink]
})
export class AvatarCardComponent {
  @Input() fullname!: string
  @Input() position!: string
  @Input() avatarUrl!: string
  @Input() id!: string
}
