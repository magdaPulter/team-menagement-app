import { NgModule } from '@angular/core';
import { ProgressbarPercentageDirective } from './progressbar-percentage.directive';

@NgModule({
    imports: [ProgressbarPercentageDirective],
    providers: [],
    exports: [ProgressbarPercentageDirective]
})
export class ProgressbarPercentageDirectiveModule {
}
