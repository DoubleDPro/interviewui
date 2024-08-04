import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TextTask} from "../../model/text-task/text-task";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TextTaskService {

    createTextTaskUrl = 'http://localhost:8082/texttasks/create';

    constructor(private http: HttpClient) {}

    saveTextTask(textTask: TextTask): Observable<TextTask> {
        return this.http.post<TextTask>(this.createTextTaskUrl, textTask);
    }

}
