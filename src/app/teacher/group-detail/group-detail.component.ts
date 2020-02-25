import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent implements OnInit {

  id: Number;
  items: Object;
  selected: Object;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.items = [
      { name: "Budget", id: 0,  subItems: [{ name: "L1: Income 1 attempt 2/10" }, { name: "L2: Fix Expenses 2 attempts 9/10" }, { name: "L3: Variable Expenses 3 attempts 10/10 " }] },
      { name: "Debt", id: 1, subItems: [{ name: "L1: Credit Cards" }, { name: "L2: Loans " }, { name: "L3: Car Payments" }] },
      { name: "Income", id: 2, subItems: [{ name: "L1: Employment Income" }, { name: "L2: Gross Income" }, { name: "L3: Net Income" }] }
    ];
    this.selected = [true, true, true];
  }

  toUp(id:number){
    this.selected[id] = false;
  }

  toDown(id:number){
    this.selected[id] = true; 
  }

  returnHome(){
    this.router.navigateByUrl("/teacher/groups");
  }
}

