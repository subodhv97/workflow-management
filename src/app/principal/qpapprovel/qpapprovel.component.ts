import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-qpapprovel',
  templateUrl: './qpapprovel.component.html',
  styleUrls: ['./qpapprovel.component.css']
})
export class QpapprovelComponent implements OnInit {

  datal: any;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.questionService.getQuestionData().subscribe((datal: any) => {
      this.datal = datal;
      console.log(this.datal);
    })
  }

  delete(j: any) {
    this.questionService.deleteQuestion(j).subscribe((data: any) => {
      this.getData();
    })
  }

}
