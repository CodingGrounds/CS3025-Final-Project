import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.scss']
})
export class GroupOverviewComponent implements OnInit {

  groups: string[];

  constructor(
    private router: Router,
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.groups = this.dataService.getGroups();
  }

  logout() {
    this.router.navigateByUrl('/login');
  }

  onClick(id: number) {
    this.router.navigateByUrl('/teacher/groups/' + id);
  }

}
