import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";

import { AppState } from "../app.state";
import { loadUsers } from "./users.actions";
import { selectAllUsers } from "./users.selectors";

@Injectable({
    providedIn: 'root',
  })
  export class UsersFacade {
    usersList$ = this.store.select(selectAllUsers);
    
    constructor(private store: Store<AppState>) {}
    
    loadUsers() {
      this.store.dispatch(loadUsers());
    }
  }