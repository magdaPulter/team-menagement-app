import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IsCLickedDirectiveModule } from '../../directives/is-clicked/is-clicked.directive-module';
import { MainContinerComponent } from './main-continer.component';

@NgModule({
    imports: [RouterModule, IsCLickedDirectiveModule, CommonModule, MainContinerComponent],
    providers: [],
    exports: [MainContinerComponent]
})
export class MainContinerComponentModule {
}
