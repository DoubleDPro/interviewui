export class Answer {
  private content:string;
  private isCorrect:boolean;

  constructor(
    content: string,
    isCorrect: boolean = false
  ) {
    this.content = content;
    this.isCorrect = isCorrect;
  }

}
