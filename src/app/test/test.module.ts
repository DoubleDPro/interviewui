import {NgModule} from "@angular/core";
import {TestComponent} from "./test.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [FormsModule, RouterModule, HttpClientModule],
  declarations: [TestComponent]
})
export class TestModule {}
