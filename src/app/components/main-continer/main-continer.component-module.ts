import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainContinerComponent } from './main-continer.component';

@NgModule({
  imports: [RouterModule],
  declarations: [MainContinerComponent],
  providers: [],
  exports: [MainContinerComponent]
})
export class MainContinerComponentModule {
}
