import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  selectedGroup: string;
  groupData: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.selectedGroup = this.route.snapshot.params.id;
    this.groupData = this.dataService.getResults(this.selectedGroup);
  }

  returnHome() {
    this.router.navigateByUrl('/teacher/groups');
  }
}

