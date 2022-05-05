import { createAction, props } from '@ngrx/store';

import { File, Type } from '../../models/models';

export const loadFiles = createAction('[Files Page] Load Files');

export const loadFilesSuccess = createAction(
    '[Files Page] Load Files Success',
    props<{ files: File[] }>()
);

export const loadFilesFailure = createAction(
    '[Files Page] Load Files Failure',
    props<{ error: string }>()
);

export const loadTypes = createAction('[Types Page] Load Types');

export const loadTypesSuccess = createAction(
    '[Types Page] Load Types Success',
    props<{ types: Type[] }>()
);

export const loadTypesFailure = createAction(
    '[Types Page] Load Types Failure',
    props<{ error: string }>()
);
