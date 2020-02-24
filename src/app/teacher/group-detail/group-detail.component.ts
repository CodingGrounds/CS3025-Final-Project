import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  id: Number; 

  constructor(
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.params);
  }

  ngOnInit(): void {
   this.id = this.route.snapshot.params["id"];
  }

}
