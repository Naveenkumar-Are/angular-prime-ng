import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../reducers";
import { login } from "../auth.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.formGroup.valid) {
      const { username, password } = this.formGroup.value;
      this.authService.login(username, password)
        .subscribe(
          user => {
            console.log(user);
            this.store.dispatch(login({ user }));

            this.router.navigateByUrl('/attendance');
          },
          error => {
            console.error('Login failed:', error);
            alert('Login failed. Please try again.');
          }
        );
    } else {

      console.error('Form validation failed:', this.formGroup.errors);
    }
  }
}
