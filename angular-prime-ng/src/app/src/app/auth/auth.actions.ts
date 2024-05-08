import {createAction, props} from "@ngrx/store";
import {User} from "../model/user.model";
import {UserSignUp} from "../model/userSignUp.model";

export const login=
  createAction( '[Login page] User Login Page'
    ,props<{user: User}>()
  );

export const loginSuccess=
  createAction('[Login page] User Login Success]');

export const logOut= createAction("[Logout page] User Logout Success");

export const userDataSaved=
  createAction('[UserSignUp page] user data saved in database',props<{userSignUp:UserSignUp}>);
