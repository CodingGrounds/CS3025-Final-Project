import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  currentQuiz = 0;
  currentAnswer = null;
  moduleId: number;
  lessonId: number;
  lesson: any;
  quiz: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (!params.id || !params.id.includes('u')) {
      console.log('Invalid lesson path. Must be <module>u<lesson>');
      this.returnHome();
      return;
    }
    const routedIdParts = this.route.snapshot.params.id.split('u');
    this.moduleId = Number(routedIdParts[0]) - 1;
    this.lessonId = Number(routedIdParts[1]) - 1;

    this.lesson = this.dataService.getLesson(this.moduleId, this.lessonId);
    if (!this.lesson) {
      console.log('Could not find lesson');
      this.returnHome();
      return;
    }
    this.quiz = this.lesson.quizzes[this.currentQuiz];
  }

  returnHome() {
    this.router.navigateByUrl('/students/lessons');
  }

  navSection(navAmount: number) {
    if (this.currentQuiz + navAmount >= this.lesson.quizzes.length) {
      this.returnHome();
    } else {
      if (this.currentAnswer == null) {
        alert('Question must be answered before proceeding');
        return;
      }
      this.submitAnswer();
      this.currentQuiz += navAmount;
      this.currentAnswer = null;
      this.quiz = this.lesson.quizzes[this.currentQuiz];
    }
  }

  isQuiz(type: string) {
    if (this.quiz == null) {
      return false;
    }

    switch (type) {
      case 'fitb':
        return this.quiz.type === 'fillintheblanks';
      case 'mc':
        return this.quiz.type === 'multiplechoice';
      default:
        return false;
    }
  }

  answerChosen(givenAnswer: any) {
    this.currentAnswer = givenAnswer;
  }

  submitAnswer() {
    const isCorrect = this.currentAnswer === this.quiz.answer;
    this.dataService.completeQuiz(this.moduleId, this.lessonId, this.currentQuiz, isCorrect);
  }
}
