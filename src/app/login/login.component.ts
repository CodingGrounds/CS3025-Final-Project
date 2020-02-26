import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.loginForm.valid) {

      const username: string = this.loginForm.get('username').value;

      if (username === 'teacher') {
        console.log('Logging in teacher');
        this.router.navigateByUrl('/teacher/groups');
      } else if (username.includes('group')) {
        console.log(`Logging in ${username}`);
        this.dataService.loginUser(username);
        this.router.navigateByUrl('/students/lessons');
      }
    } else {
      console.log('Login form is invalid');
    }
  }
}
