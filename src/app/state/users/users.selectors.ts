import { createSelector } from "@ngrx/store";

import { AppState } from "../app.state";
import { UsersState } from "./users.reducer";

export const selectUsers = (state: AppState) => state.usersState;

export const selectAllUsers = createSelector(
    selectUsers,
    (state: UsersState) => state?.users
);

export const selectIsLoading = createSelector(
    selectUsers,
    (state: UsersState) => state?.loading
);
