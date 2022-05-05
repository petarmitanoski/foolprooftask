import { createAction, props } from '@ngrx/store';

import { User } from '../../models/models';

export const loadUsers = createAction('[Users Page] Load Users');

export const loadUsersSuccess = createAction(
    '[Users Page] Load Users Success',
    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    '[Users Page] Load Users Failure',
    props<{ error: string }>()
);
