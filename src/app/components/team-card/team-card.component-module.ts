import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { TeamCardComponent } from './team-card.component';

@NgModule({
    imports: [CommonModule, AvatarListComponentModule, RouterModule, TeamCardComponent],
    providers: [],
    exports: [TeamCardComponent]
})
export class TeamCardComponentModule {
}
