import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { signup } from '../auth.actions';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formGroup!: FormGroup;
  countries = [
    { NAME: 'India' }, { NAME: 'Pakistan' }, { NAME: 'Nepal' },
    { NAME: 'USA' }, { NAME: 'Canada' }, { NAME: 'Sri Lanka' },
    { NAME: 'UAE' }, { NAME: 'Mexico' }
  ];
  categories = ['Male', 'Female', 'Other'];

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      gender: ['', Validators.required],
      country: [null, Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {
    if (this.formGroup.valid) {
      const formValues = this.formGroup.value;

      const user: User = {
        username: formValues.username,
        firstname: formValues.firstname,
        lastname: formValues.lastname,
        dateOfBirth: formValues.dateOfBirth,
        gender: formValues.gender,
        country: formValues.country.NAME,
        password: formValues.password
      };

      console.log('Form Data:', user);
      this.store.dispatch(signup({ user }));
    } else {
      console.log('Form is invalid');
      this.formGroup.markAllAsTouched();
    }
  }
}


