import { State } from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { state } from '@angular/animations';

export const getState = createFeatureSelector<State>('myReducer');
export const getIsAuthenticated = createSelector(getState, state => state.isAuthenticated);
export const currentLoggedInUser = createSelector(getState, state => state.username);