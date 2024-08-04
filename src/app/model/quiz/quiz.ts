export class Quiz {
    content: string;
    answer: string;

    constructor(
        content: string,
        answer: string
    ) {
        this.content = content;
        this.answer = answer;
    }
}