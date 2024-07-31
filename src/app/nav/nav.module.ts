import {NgModule} from "@angular/core";
import {NavComponent} from "./nav.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    FormsModule,
    RouterModule
  ],
  declarations: [NavComponent]
})
export class NavModule {}
