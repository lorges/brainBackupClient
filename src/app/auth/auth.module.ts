import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthenticationEffects } from './store/auth.effects'
import { reducer } from './store/auth.reducer'
import { AuthenticationService } from './service/authentication.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('myReducer', reducer ),
    EffectsModule.forFeature([ AuthenticationEffects ]),
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthModule { }
