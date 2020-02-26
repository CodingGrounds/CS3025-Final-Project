import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent implements OnInit {

  @Input() quiz: any;

  @Output() quizComplete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  optionSelected(event: any) {
    this.quizComplete.next(event.value);
  }
}
