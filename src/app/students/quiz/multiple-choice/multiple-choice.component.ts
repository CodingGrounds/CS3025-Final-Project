import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() quiz: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.quiz);
  }
}
