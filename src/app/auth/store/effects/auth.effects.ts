import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from "../../service/authentication.service";
import { AuthActionTypes } from "../actions/auth.actions";

@Injectable()
export class AuthEffects {

    constructor(
        private actions: Actions,
        private router: Router,
        private authService: AuthenticationService
    ) {}

    @Effect()
    login: Observable<any> = this.actions
        .ofType(AuthActionTypes.LOGIN)
        .map((action: Login) => action.payload)
        .switchMap(payload => {
            return this.authService.authentication(payload.email, payload.password)
                .map((user) => {
                    return new LoginComplete({token: user.token, email: payload.email});
                })
                .catch((error) => {
                    return Observable.of(new LoginError({ error: error }));
                });
        });
}