import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContinerComponent } from "./components/main-continer/main-continer.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet, MainContinerComponent]
})
export class AppComponent {
  title = 'ng-bootstrap-starter-kit';


}
