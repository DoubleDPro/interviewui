import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {TestModule} from "./test/test.module";
import {QuizModule} from "./quiz/quiz.module";
import {NavModule} from "./nav/nav.module";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [FormsModule, TestModule, BrowserModule, RouterModule, NavModule, QuizModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
