import {createAction, props} from "@ngrx/store";
import {User} from "../model/user.model";


export const login=
  createAction( '[Login page] User Login Page'
    , props<{ username: string; password: string }>()
  );

export const signup = createAction(
  '[Auth] Signup',
  props<{ user: User }>()
);

export const signupSuccess = createAction(
  '[Auth] Signup Success',
  props<{ message: string }>()
);

export const signupFailure = createAction(
  '[Auth] Signup Failure',
  props<{ error: any }>()
);

export const loginSuccess = createAction(
  '[Login page] User Login Success', props<{ user: User }>()
);

export const logOut= createAction("[Logout page] User Logout Success");

export const userDataSaved=
  createAction('[UserSignUp page] user data saved in database',props<{userSignUp:User}>);


export const loginFailure = createAction(
  '[Login Page] Login Failure',
  props<{ error: any }>()
);
