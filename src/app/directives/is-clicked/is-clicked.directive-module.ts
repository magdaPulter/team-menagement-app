import { NgModule } from '@angular/core';
import { IsCLickedDirective } from './is-clicked.directive';

@NgModule({
    imports: [IsCLickedDirective],
    providers: [],
    exports: [IsCLickedDirective]
})
export class IsCLickedDirectiveModule {
}
