import {Answer} from "./answer";

export class Test {
  content:string;
  isOnlyOneAnswer:boolean;
  answers: Answer[];

  constructor(
    content: string,
    isOnlyOneAnswer: boolean = false,
    answers: Answer[]
  ) {
    this.content = content;
    this.isOnlyOneAnswer = isOnlyOneAnswer;
    this.answers = answers;
  }

}
