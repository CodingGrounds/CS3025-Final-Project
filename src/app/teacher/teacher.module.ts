import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { TeacherComponent } from './teacher.component';



@NgModule({
  declarations: [GroupDetailComponent, GroupOverviewComponent, TeacherComponent],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
