import {Component} from "@angular/core";
import {Test} from "../model/test/test";
import {FormsModule} from "@angular/forms";
import {Answer} from "../model/test/answer";
import {TestsService} from "../services/test/tests.service";

@Component({
  selector: 'test-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'test.component.html',
  styleUrl: 'test.component.css'
})
export class TestComponent{

  constructor(private testService: TestsService) {
  }

  testContent = '';
  isOnlyOneAnswer = false;
  firstAnswerContent = '';
  isFirstAnswerCorrect = false;
  secondAnswerContent = '';
  isSecondAnswerCorrect = false;
  thirdAnswerContent = '';
  isThirdAnswerCorrect = false;
  fourthAnswerContent = '';
  isFourthAnswerCorrect = false;

  changeOnlyOneAnswer(values: any) {
    if (values.currentTarget.checked) {
      this.isSecondAnswerCorrect = false;
      this.isThirdAnswerCorrect = false;
      this.isFourthAnswerCorrect = false;
    } else {
      this.isFirstAnswerCorrect = false;
      this.isSecondAnswerCorrect = false;
      this.isThirdAnswerCorrect = false;
      this.isFourthAnswerCorrect = false;
    }
  }

  onSubmit() {
    let firstAnswer = new Answer(this.firstAnswerContent, this.isFirstAnswerCorrect);
    let secondAnswer = new Answer(this.secondAnswerContent, this.isSecondAnswerCorrect);
    let thirdAnswer = new Answer(this.thirdAnswerContent, this.isThirdAnswerCorrect);
    let fourthAnswer = new Answer(this.fourthAnswerContent, this.isFourthAnswerCorrect);

    let answers = [
      firstAnswer,
      secondAnswer,
      thirdAnswer,
      fourthAnswer
    ]

    let test = new Test(
      this.testContent,
      this.isOnlyOneAnswer,
      answers
    )

    console.log('Saving test ' + test)

    this.testService.saveTest(test).subscribe(
      () => console.log('Send to save test')
    );

  }

}
