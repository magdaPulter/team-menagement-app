import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarListComponent } from './avatar-list.component';

@NgModule({
    imports: [CommonModule, RouterModule, AvatarListComponent],
    providers: [],
    exports: [AvatarListComponent]
})
export class AvatarListComponentModule {
}
