import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  formGroup!: FormGroup;
  countries = [{ NAME: 'India' }, { NAME: 'Pakistan' }, { NAME: 'Nepal' }, { NAME: 'USA' }, { NAME: 'Canada' }, { NAME: 'Sri Lanka' }, { NAME: 'UAE' }, { NAME: 'Mexico' }];
  categories = ['Male', 'Female', 'Other'];


  constructor(private formBuilder: FormBuilder) { }

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
   // if (this.formGroup.valid) {
  alert("Signd up")
      console.log('Form submitted with values: ', )//this.formGroup.value);
   // } else {
      console.log('Form is invalid');
  //  }
  }
}

