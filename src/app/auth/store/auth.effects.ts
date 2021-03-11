import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../service/authentication.service";
import { switchMap,map, catchError, tap } from "rxjs/operators";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { User } from "../model/user.model";
import { AuthenticationActionTypes, AuthenticationCompleteAction, AuthenticationErrorAction, AuthenticationStartAction, LogoutAction } from "./auth.actions";
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthCredentials } from '../model/authCredentials.model';
import { Store } from '@ngrx/store';

@Injectable()
export class AuthenticationEffects {

    constructor(
        private actions$: Actions,
        private router: Router,
        private authService: AuthenticationService,
        private store: Store
    ) {}

    @Effect()
    authenticate$ = this.actions$.pipe(
        ofType(AuthenticationActionTypes.AUTH_START),
        map((action: AuthenticationStartAction) => action.payload),
        switchMap( (payload: AuthCredentials) => {
            return this.authService.authentication(payload)
                .pipe(
                    map((user: User) => {
                        return new AuthenticationCompleteAction(user);
                    }), 
                    catchError((error: HttpErrorResponse) => {
                         return of(
                             new AuthenticationErrorAction({ })
                         );
                    })
                )
            }
        ),
    );

    @Effect({dispatch: false})
    logout$ = this.actions$.pipe(
        ofType(AuthenticationActionTypes.LOGOUT),
        map((action: LogoutAction) => action.payload),
        
    )

    @Effect({dispatch: false})
    authComplete$ = this.actions$.pipe(
        ofType(AuthenticationActionTypes.AUTH_COMPLETE),
        map((action: AuthenticationCompleteAction) => action.payload),
        //tap(() => this.router.navigate(['/']))
    )
}