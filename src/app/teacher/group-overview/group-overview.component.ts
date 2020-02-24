import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.scss']
})
export class GroupOverviewComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  click(id: Number) {
    console.log("click");
    this.router.navigateByUrl("/teacher/groups/" + id);
  }

}
