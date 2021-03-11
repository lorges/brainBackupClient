import { User } from "../model/user.model";
import { Action } from "@ngrx/store"
import { AuthCredentials } from '../model/authCredentials.model';

export enum AuthenticationActionTypes {
    AUTH_START = '[User] LOGIN',
    AUTH_COMPLETE = '[User] LOGIN_COMPLETE',
    AUTH_ERROR = '[User] LOGIN_ERROR',
    LOGOUT = '[User] LOGOUT'
}


export class AuthenticationStartAction implements Action {
    readonly type = AuthenticationActionTypes.AUTH_START;

    constructor(public payload: AuthCredentials) {}
}

export class AuthenticationCompleteAction implements Action {
    readonly type = AuthenticationActionTypes.AUTH_COMPLETE;

    constructor(public payload: User) {};
}

export class AuthenticationErrorAction implements Action {
    readonly type = AuthenticationActionTypes.AUTH_ERROR;

    constructor(public payload: any) {}
}

export class LogoutAction implements Action {
    readonly type = AuthenticationActionTypes.LOGOUT;

    constructor(public payload: any) {}
}
  
export type AuthActions
   = AuthenticationStartAction
   | AuthenticationCompleteAction
   | AuthenticationErrorAction
   | LogoutAction;