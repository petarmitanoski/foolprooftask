import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { loadFiles, loadFilesFailure, loadFilesSuccess, loadTypes, loadTypesFailure, loadTypesSuccess } from './files.actions';
import { FilesService } from '../../files/files.service';
import { File, Type } from '../../models/models';
import { TypesService } from '../../files/types.service';

@Injectable()
export class FilesEffects {
  loadFiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFiles),
      switchMap(() => this.filesService.getFiles().pipe(
        map((files: File[]) => loadFilesSuccess({files: files})),
        catchError((error) => of(loadFilesFailure(error)))
      ))
    )
  );

  loadTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTypes),
      switchMap(() => this.typesService.getTypes().pipe(
        map((types: Type[]) => loadTypesSuccess({types: types})),
        catchError((error) => of(loadTypesFailure(error)))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private filesService: FilesService,
    private typesService: TypesService
  ) {}
}