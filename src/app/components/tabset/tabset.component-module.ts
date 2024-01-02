import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsetComponent } from './tabset.component';

@NgModule({
    imports: [CommonModule, TabsetComponent],
    providers: [],
    exports: [TabsetComponent]
})
export class TabsetComponentModule {
}
