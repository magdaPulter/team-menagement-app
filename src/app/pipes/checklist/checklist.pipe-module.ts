import { NgModule } from '@angular/core';
import { ChecklistPipe } from './checklist.pipe';

@NgModule({
    imports: [ChecklistPipe],
    providers: [],
    exports: [ChecklistPipe]
})
export class ChecklistPipeModule {
}
