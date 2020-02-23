import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { TeacherComponent } from './teacher.component';

@NgModule({
  declarations: [GroupDetailComponent, GroupOverviewComponent, TeacherComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule
  ]
})
export class TeacherModule { }
