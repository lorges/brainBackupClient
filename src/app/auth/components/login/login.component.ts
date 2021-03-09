import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

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
    //this.store.dispatch(new)
  }

}
