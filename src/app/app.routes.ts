import {Routes} from '@angular/router';
import {TestComponent} from "./test/test.component";
import {QuizComponent} from "./quiz/quiz.component";
import {NavComponent} from "./nav/nav.component";
import {TextTaskComponent} from './text-task/text-task.component';

export const routes: Routes = [
  { path: '', component: NavComponent },
  { path: 'test', component: TestComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'text-task', component: TextTaskComponent }
];
