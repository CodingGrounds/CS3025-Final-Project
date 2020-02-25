import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-in-the-blanks',
  templateUrl: './fill-in-the-blanks.component.html',
  styleUrls: ['./fill-in-the-blanks.component.scss']
})
export class FillInTheBlanksComponent implements OnInit {

  @Input() quiz: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.quiz);
  }
}
