import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { LessonOverviewComponent } from './lesson-overview/lesson-overview.component';
import { QuizComponent } from './quiz/quiz.component';
import { MultipleChoiceComponent } from './quiz/multiple-choice/multiple-choice.component';
import { FillInTheBlanksComponent } from './quiz/fill-in-the-blanks/fill-in-the-blanks.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { StudentsComponent } from './students.component';

@NgModule({
  declarations: [
    LessonOverviewComponent,
    QuizComponent,
    MultipleChoiceComponent,
    FillInTheBlanksComponent,
    LessonDetailComponent,
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
  ]
})
export class StudentsModule { }
