import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from './question';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  question = new Question();

  constructor(private http: HttpClient) { }


  public addQuestionData(question: Question) {
    return this.http.post("http://localhost:8080/quiz/", question);
  }

  public getQuestionData() {
    return this.http.get("http://localhost:8080/quiz/quizData/").pipe(map(res => {
      return res;
    }))
  }

  deleteQuestion(id: number) {
    return this.http.delete<any>("http://localhost:8080/quiz/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}
