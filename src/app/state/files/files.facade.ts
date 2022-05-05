import { Injectable } from "@angular/core";

import { Store } from "@ngrx/store";
import { BehaviorSubject, combineLatest, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

import { FileType } from "../../models/enums";
import { DisplayFile } from "../../models/models";
import { AppState } from "../app.state";
import { UsersFacade } from "../users/users.facade";
import { loadFiles, loadTypes } from "./files.actions";
import { selectAllFiles, selectAllTypes } from "./files.selectors";

@Injectable({
    providedIn: 'root',
  })
  export class FilesFacade {
    public searchValue = new BehaviorSubject<string>('');

    filesList$ = this.store.select(selectAllFiles);
    typesList$ = this.store.select(selectAllTypes);

    displayFiles$: Observable<DisplayFile[]> = combineLatest([
      this.filesList$,
      this.usersFacade.usersList$
    ]).pipe(map(([files, users]) => {
        return files.map(f => {
          let createdByUser = users.find(u => u.id == f.createdBy);
          let modifiedByUser = users.find(u => u.id == f.modifiedBy);
          return {
            ...f,
            createdByUser: createdByUser?.givenName + " " + createdByUser?.familyName,
            modifiedByUser: modifiedByUser?.givenName + " " + modifiedByUser?.familyName
          } as DisplayFile
        })
    }));

    filteredFiles$: Observable<DisplayFile[]> = combineLatest([
      this.displayFiles$,
      this.searchValue
    ]).pipe(map(([displayFiles, searchValue]) => {
        return displayFiles.filter(f => searchValue ? f.title.toLowerCase().includes(searchValue.toLowerCase()) : true);
    }));

    profileFiles$ = this.displayFiles$.pipe(map((files)=> {
      return files.filter(f => f.type === FileType.Profile)
    }));

    articleFiles$ = this.displayFiles$.pipe(map((files)=> {
      return files.filter(f => f.type === FileType.Article)
    }));
    
    constructor(private store: Store<AppState>, private usersFacade: UsersFacade) {}
    
    loadFiles() {
      this.store.dispatch(loadTypes());
      this.store.dispatch(loadFiles());
    }
  }