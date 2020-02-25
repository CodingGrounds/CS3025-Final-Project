import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as data from '../../../assets/lessons.json';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {

  currentRoute: string;
  currentSection = 0;
  lesson: any;
  section: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (!params.id || !params.id.includes('u')) {
      console.log('Invalid lesson path. Must be <module>u<lesson>');
      this.returnHome();
      return;
    }
    this.currentRoute = this.route.snapshot.params.id;
    const routedIdParts = this.currentRoute.split('u');
    const moduleId = Number(routedIdParts[0]) - 1;
    const lessonId = Number(routedIdParts[1]) - 1;

    // tslint:disable-next-line: no-string-literal
    const modules = data['default'];
    if (!modules[moduleId] && !modules[moduleId].lessons[lessonId]) {
      console.log('Could not find lesson');
      this.returnHome();
      return;
    }

    this.lesson = modules[moduleId].lessons[lessonId];
    this.section = this.lesson.sections[this.currentSection];
    console.log(this.lesson);
  }

  returnHome() {
    this.router.navigateByUrl('/students/lessons');
  }

  navSection(navAmount: number) {
    if (this.currentSection + navAmount < 0) {
      this.returnHome();
    } else if (this.currentSection + navAmount >= this.lesson.sections.length) {
      this.router.navigateByUrl(`/students/quizzes/${this.currentRoute}`);
    } else {
      this.currentSection += navAmount;
      this.section = this.lesson.sections[this.currentSection];
    }
  }
}
