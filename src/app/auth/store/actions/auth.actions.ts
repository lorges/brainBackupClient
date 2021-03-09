import { User } from "./model/user.model";
import { Action } from "@ngrx/store"

export enum AuthActionTypes {
    LOGIN = '[User] LOGIN',
    LOGIN_COMPLETE = '[User] LOGIN_COMPLETE',
    LOGIN_ERROR = '[User] LOGIN_ERROR',
}


export class Login implements Action {
    readonly type = AuthActionTypes.LOGIN;

    constructor(public payload: User) {}
}

export class LoginComplete implements Action {
    readonly type = AuthActionTypes.LOGIN_COMPLETE;

    constructor(public payload: User) {}
}

export class LoginError implements Action {
    readonly type = AuthActionTypes.LOGIN_ERROR;

    constructor(public payload: any) {}
}
  
export type AuthActions
   = Login
   | LoginComplete
   | LoginError;