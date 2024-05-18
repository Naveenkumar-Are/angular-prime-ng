import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { AppState } from "../reducers";
import { signup } from "../auth.actions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;
  countries = [{ NAME: 'India' }, { NAME: 'Pakistan' }, { NAME: 'Nepal' }, { NAME: 'USA' }, { NAME: 'Canada' }, { NAME: 'Sri Lanka' }, { NAME: 'UAE' }, { NAME: 'Mexico' }];
  categories = ['Male', 'Female', 'Other'];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      selectedCategory: ['', Validators.required],
      selectedCountry: [null, Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp() {
    if (this.formGroup.valid) {
      // Log form values before dispatching action
      const formData = this.formGroup.value;
      console.log('Form Data:', formData);

      // Dispatch signUp action with form data
      this.store.dispatch(signup(({ user: formData })));
    } else {
      console.log('Form is invalid');
    }
  }
}

