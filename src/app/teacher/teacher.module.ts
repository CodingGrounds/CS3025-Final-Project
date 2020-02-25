import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupOverviewComponent } from './group-overview/group-overview.component';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TeacherComponent } from './teacher.component';

@NgModule({
  declarations: [GroupDetailComponent, GroupOverviewComponent, TeacherComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class TeacherModule { }
