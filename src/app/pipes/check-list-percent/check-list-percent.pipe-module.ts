import { NgModule } from '@angular/core';
import { CheckListPercentPipe } from './check-list-percent.pipe';

@NgModule({
    imports: [CheckListPercentPipe],
    providers: [],
    exports: [CheckListPercentPipe]
})
export class CheckListPercentPipeModule {
}
