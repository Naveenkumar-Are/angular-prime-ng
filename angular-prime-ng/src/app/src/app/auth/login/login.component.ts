import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ɵElement} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  country: string="";
  username: string ="";
  password: string="";

  formGroup: FormGroup= new FormGroup({});

  constructor(private formBuilder: FormBuilder){


}
ngOnInit(){
  this.formGroup=this.formBuilder.group({
    username: ['',Validators.required],
    password: ['',Validators.required],

  });

}
  login() {
   console.log(this.username)
  }
}
