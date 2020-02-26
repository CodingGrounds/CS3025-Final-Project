import { Injectable, ModuleWithProviders, NgModule } from '@angular/core';

import * as lessonData from '../../assets/lessons.json';

@Injectable()
export class DataService {

  passCriteria = 0.60;

  currentUser: string;
  groupData: any = {};

  modules: any[];

  constructor() {
    // tslint:disable-next-line: no-string-literal
    this.modules = lessonData['default'];
    // Assign an id to each lesson
    this.modules.forEach((m: any, i) => {
      m.id = i + 1;
      m.lessons.forEach((l: any, j) => {
        l.id = j + 1;
      });
    });
    this.fromLocalStorage();
  }

  toLocalStorage() {
    window.localStorage.currentUser = this.currentUser;
    window.localStorage.groupData = JSON.stringify(this.groupData);
  }

  fromLocalStorage() {
    if (window.localStorage.currentUser) {
      this.currentUser = window.localStorage.currentUser;
    }
    if (window.localStorage.groupData) {
      this.groupData = JSON.parse(window.localStorage.groupData);
    }
  }

  /**
   * Logs a student group in and creates their records if non exist
   *
   * @param username group name to login with
   */
  loginUser(username: string) {
    this.fromLocalStorage();
    this.currentUser = username;
    if (!this.groupData[username]) {
      this.groupData[username] = {};
    }
    this.toLocalStorage();
  }

  completeQuiz(moduleId: number, lessonId: number, quizId: number, passed: boolean) {
    this.fromLocalStorage();
    if (!this.groupData[this.currentUser]) {
      this.groupData[this.currentUser] = {};
    }
    if (!this.groupData[this.currentUser][moduleId]) {
      this.groupData[this.currentUser][moduleId] = {};
    }
    if (!this.groupData[this.currentUser][moduleId][lessonId]) {
      this.groupData[this.currentUser][moduleId][lessonId] = {};
    }
    this.groupData[this.currentUser][moduleId][lessonId][quizId] = passed;
    this.toLocalStorage();
  }

  getAllModules() {
    this.fromLocalStorage();
    return this.modules;
  }

  getLessons(moduleId: number) {
    this.fromLocalStorage();
    if (moduleId >= this.modules.length) {
      return [];
    }
    return this.modules[moduleId].lessons;
  }

  getLesson(moduleId: number, lessonId: number) {
    this.fromLocalStorage();
    if (moduleId >= this.modules.length) {
      return null;
    }
    if (lessonId >= this.modules[moduleId].lessons.length) {
      return null;
    }
    return this.modules[moduleId].lessons[lessonId];
  }

  getGroups() {
    return Object.keys(this.groupData);
  }

  getResults(group: string) {
    this.fromLocalStorage();
    const parsedData = [];
    const rawData = this.groupData[group];
    // This is a mess. I am sorry...
    // The purpose of this is to translate the stored results into human readable format
    Object.keys(rawData).forEach(moduleId => {
      const moduleTitle = this.modules[moduleId].title;
      const parsedModule = { title: moduleTitle, lessons: [] };
      Object.keys(rawData[moduleId]).forEach(lessonId => {
        const lessonTitle = this.modules[moduleId].lessons[lessonId].title;
        const parsedLesson = { title: lessonTitle, score: 0 };
        let totalCount = 0;
        let correctCount = 0;
        Object.keys(rawData[moduleId][lessonId]).forEach(quizId => {
          totalCount++;
          if (rawData[moduleId][lessonId][quizId]) {
            correctCount++;
          }
        });
        parsedLesson.score = correctCount / totalCount;
        parsedModule.lessons.push(parsedLesson);
      });
      parsedData.push(parsedModule);
    });
    return parsedData;
  }

  // TODO:
  checkLessonCompleted(moduleId: number, lessonId: number) {
    this.fromLocalStorage();
    if (
      this.groupData[this.currentUser][moduleId]
      && this.groupData[this.currentUser][moduleId][lessonId]
    ) {
      console.log(this.groupData[this.currentUser][moduleId][lessonId]);
    }
  }
}

@NgModule({
  providers: [
    DataService,
  ]
})
export class DataServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataServiceModule,
      providers: [DataService]
    };
  }
}
