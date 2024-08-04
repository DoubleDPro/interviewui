import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Quiz} from "../../model/quiz/quiz";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class QuizzesService {

    createQuizUrl = 'http://localhost:8080/quizzes/create';

    constructor(private http: HttpClient) {
    }

    saveQuiz(quiz: Quiz): Observable<Quiz> {
        return this.http.post<Quiz>(this.createQuizUrl, quiz);
    }

}
