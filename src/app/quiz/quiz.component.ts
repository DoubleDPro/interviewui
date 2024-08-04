import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {QuizzesService} from "../services/quiz/quiz.service";
import {Quiz} from "../model/quiz/quiz";

@Component({
  selector: 'quiz-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'quiz.component.html',
  styleUrl: 'quiz.component.css'
})
export class QuizComponent {

  constructor(private quizService: QuizzesService) {}

  quizContent = '';
  quizAnswer = '';

  onSubmit() {
    let quiz = new Quiz(this.quizContent, this.quizAnswer);

    console.log('Saving quiz ' + quiz);

    this.quizService.saveQuiz(quiz).subscribe(
      () => console.log('Send to save quiz')
    );

  }

}
