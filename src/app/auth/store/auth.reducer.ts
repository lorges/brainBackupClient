
import { AuthActions, AuthenticationActionTypes } from './auth.actions'

export interface State {
    loading: boolean;
    isAuthenticated: boolean;
    username: string;
}

const initialState: State = {
    loading: false,
    isAuthenticated: false,
    username: ''
}

export function reducer(state = initialState, action: AuthActions) : State {
    switch(action.type) {
        
        case AuthenticationActionTypes.AUTH_START: {
            return {
                ...state,
                username: action.payload.username
            }
        }

        case AuthenticationActionTypes.AUTH_COMPLETE: {
            return {
                ...state,
                isAuthenticated: true
            }
        }

        case AuthenticationActionTypes.AUTH_ERROR: {
            return {
                ...state,
                isAuthenticated: false
            }
        }

        case AuthenticationActionTypes.LOGOUT: {
            return {
                ...state,
                isAuthenticated: false,
                username: ''
            }
        }

        default: {
            return state;
        }
    }
}