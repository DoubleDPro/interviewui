import {Component} from "@angular/core";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'nav-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: 'nav.component.html'
})
export class NavComponent {}
