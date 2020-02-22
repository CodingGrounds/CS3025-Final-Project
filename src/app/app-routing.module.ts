import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { LessonOverviewComponent } from './students/lesson-overview/lesson-overview.component';
import { LessonDetailComponent } from './students/lesson-detail/lesson-detail.component';
import { QuizComponent } from './students/quiz/quiz.component';
import { TeacherComponent } from './teacher/teacher.component';
import { GroupOverviewComponent } from './teacher/group-overview/group-overview.component';
import { GroupDetailComponent } from './teacher/group-detail/group-detail.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'students', children: [
      {
        path: 'lessons', children: [
          { path: ':id', component: LessonDetailComponent },
          { path: '', component: LessonOverviewComponent, pathMatch: 'full' },
        ]
      },
      {
        path: 'quizzes/:id', component: QuizComponent
      },
      { path: '', component: StudentsComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'teacher', children: [
      {
        path: 'groups', children: [
          { path: ':id', component: GroupDetailComponent },
          { path: '', component: GroupOverviewComponent, pathMatch: 'full' },
        ]
      },
      { path: '', component: TeacherComponent, pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
