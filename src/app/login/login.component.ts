import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit(){
    if(this.loginForm.valid){
      console.log("Valid");

      const username = this.loginForm.get('username').value;
      console.log(username);

      if(username === "teacher"){
        console.log("Yes: Teacher");
        this.router.navigateByUrl('/teacher');
        
      }
      else if (username === "student"){
        console.log("Yes: Student");
        this.router.navigateByUrl('/students')
        
      }
    }
    else {
      console.log("Invalid");
      //TODO ERROR MESSAGE 
    }
  }
}
