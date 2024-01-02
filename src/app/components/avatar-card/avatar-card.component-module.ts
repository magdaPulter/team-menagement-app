import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarCardComponent } from './avatar-card.component';

@NgModule({
    imports: [RouterModule, AvatarCardComponent],
    providers: [],
    exports: [AvatarCardComponent]
})
export class AvatarCardComponentModule {
}
