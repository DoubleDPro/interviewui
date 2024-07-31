import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Test} from "../model/test/test";

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  createTestUrl = 'http://localhost:8080/tests/create';

  constructor(private http: HttpClient) {
  }

  saveTest(test: Test): Observable<Test> {
    return this.http.post<Test>(this.createTestUrl, test);
  }

  handleError(action: string, test: Test) {
    console.log('Error while ' + action + ' test ' + test)
  }
}
