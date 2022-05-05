import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { loadUsers, loadUsersFailure, loadUsersSuccess } from './users.actions';
import { UsersService } from '../../users/users.service';
import { User } from '../../models/models';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => this.usersService.getUsers().pipe(
        map((users: User[]) => loadUsersSuccess({users: users})),
        catchError((error) => of(loadUsersFailure(error)))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}
}