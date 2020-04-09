import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

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

  sectionCount = 0;
  progressPercent = 0;

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
    this.currentRoute = this.route.snapshot.params.id;
    const routedIdParts = this.currentRoute.split('u');
    const moduleId = Number(routedIdParts[0]) - 1;
    const lessonId = Number(routedIdParts[1]) - 1;

    this.lesson = this.dataService.getLesson(moduleId, lessonId);
    if (!this.lesson) {
      console.log('Could not find lesson');
      this.returnHome();
      return;
    }
    this.sectionCount = this.lesson.sections.length;
    this.progressPercent = this.currentSection / this.sectionCount * 100;
    this.section = this.lesson.sections[this.currentSection];
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
      this.progressPercent = this.currentSection / this.sectionCount * 100;
      this.section = this.lesson.sections[this.currentSection];
    }
  }
}
