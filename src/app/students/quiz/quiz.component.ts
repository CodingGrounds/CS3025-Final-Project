import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as data from '../../../assets/lessons.json';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  currentQuiz = 0;
  lesson: any;
  quiz: any;

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
    const routedIdParts = this.route.snapshot.params.id.split('u');
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
    this.quiz = this.lesson.quizzes[this.currentQuiz];
    console.log(this.lesson);
  }

  returnHome() {
    this.router.navigateByUrl('/students/lessons');
  }

  navSection(navAmount: number) {
    if (this.currentQuiz + navAmount >= this.lesson.sections.length) {
      this.returnHome();
    } else {
      this.currentQuiz += navAmount;
      this.quiz = this.lesson.quizzes[this.currentQuiz];
    }
  }

  isQuiz(type: string) {
    switch (type) {
      case 'fitb':
        return this.quiz.type === 'fillintheblanks';
      case 'mc':
        return this.quiz.type === 'multiplechoice';
      default:
        return false;
    }
  }
}
