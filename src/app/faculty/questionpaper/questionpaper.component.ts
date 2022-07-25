import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Question } from 'src/app/services/question';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-questionpaper',
  templateUrl: './questionpaper.component.html',
  styleUrls: ['./questionpaper.component.css']
})
export class QuestionpaperComponent implements OnInit {

  question = new Question();
  // datal = new Question();
  data: any;
  datal: any;

  constructor(private questionService: QuestionService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.getQuestionData()

  }


  getQuestionData() {
    this.questionService.getQuestionData().subscribe((datal: any) => {
      this.datal = datal;
    })
  }

  delete(j: any) {
    this.questionService.deleteQuestion(j).subscribe((datal: any) => {
      this.getQuestionData();
    })
  }


  addQuestion() {
    this.questionService.addQuestionData(this.question).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Requested Successfully', 'Subject is ' + data.subject + ' success');
      },
      (error: any) => {
        console.log(error);
        this.snack.open('Something went wrong !!', 'Ok', { duration: 2000 });
      }
    )
  }

}
