import {User} from "../../model/user.model";
import {UserSignUp} from "../../model/userSignUp.model";

import {ActionReducer, ActionReducerMap, createReducer, on} from "@ngrx/store";
import {AuthActions} from "../action-types";
import {state} from "@angular/animations";

export interface AppState{
  user:User;
}


export interface AuthState{
  user:User | undefined ;
}

export  const initialAuthState: AuthState= {
  user: undefined
};

export const authReducer= createReducer(
  initialAuthState, on(AuthActions.login,(state,action)=>{
    return{
      user:action.user
    }
}),

  on(AuthActions.logOut,(state,action)=>{
    return {
      user: undefined
    }
  })


);
