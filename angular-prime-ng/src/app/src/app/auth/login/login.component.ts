import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ɵElement} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {AppState} from "../reducers";
import {Store} from "@ngrx/store";
import {noop, tap, TapObserver} from "rxjs";
import {User} from "../../model/user.model";
import {login} from "../auth.actions";

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


  constructor(private formBuilder: FormBuilder,
  private auth: AuthService,
              private router: Router,
              private store: Store<AppState>
  ){


}
ngOnInit(){
  this.formGroup=this.formBuilder.group({
    username: ['',Validators.required],
    password: ['',Validators.required],

  });

}
  login() {
   const val= this.formGroup.value;

   this.auth.login(val.username,val.password)
     .pipe(
       tap(user=>{
         console.log(user);
         this.store.dispatch(login({user}));
       // this.router.navigateByUrl('/products')
    })
     ).subscribe(
       noop,
      ()=> alert('login failed')
    )

  }
}
