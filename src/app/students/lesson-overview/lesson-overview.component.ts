import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as data from '../../../assets/lessons.json';

@Component({
  selector: 'app-lesson-overview',
  templateUrl: './lesson-overview.component.html',
  styleUrls: ['./lesson-overview.component.scss']
})
export class LessonOverviewComponent implements OnInit {

  modules: any[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.modules = data['default'];
    // Assign an id to each lesson
    this.modules.forEach((m: any, i) => {
      m.id = i + 1;
      m.lessons.forEach((l: any, j) => {
        l.id = j + 1;
      });
    });
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}
