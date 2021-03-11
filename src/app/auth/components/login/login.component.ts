import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthCredentials } from "../../model/authCredentials.model";
import { AuthenticationStartAction, LogoutAction } from "../../store/auth.actions";
import { currentLoggedInUser, getIsAuthenticated, getState } from "../../store/auth.selectors";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userCredentials: AuthCredentials = {username: '', password: ''};

  loadingTransactions$ = this.store.select(getIsAuthenticated);
  currentLoggedInUser$ = this.store.select(currentLoggedInUser);

  constructor(private formBuilder: FormBuilder,
              private store: Store) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      login: [''],
      password: ['']
      },
    );
  }

  login(): void {
     this.userCredentials.username = this.loginForm.value.login;
     this.userCredentials.password = this.loginForm.value.password;
     this.store.dispatch(new AuthenticationStartAction(this.userCredentials));
     this.loginForm.reset();
  }

  logout(): void {
    this.store.dispatch(new LogoutAction(this.userCredentials));
 }

}
