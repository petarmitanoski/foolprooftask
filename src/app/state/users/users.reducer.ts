import { createReducer, on } from '@ngrx/store';

import { User } from '../../models/models';
import * as UsersActions from './users.actions';

export interface UsersState {
  users: User[];
  error: string | null;
  loading: boolean;
}

export const initialState: UsersState = {
  users: [],
  error: null,
  loading: false,
};

export const usersReducer = createReducer(
  initialState,

  on(UsersActions.loadUsers, state => ({ ...state, loading: true })),

  on(UsersActions.loadUsersSuccess, (state, { users }) => ({ 
    ...state,
    users: users,
    error: null,
    loading: false,
  })),

  on(UsersActions.loadUsersFailure, (state, { error }) => ({ 
    ...state,
    error: error,
    loading: false,
  })),
);