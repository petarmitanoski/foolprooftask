import { createReducer, on } from '@ngrx/store';

import { File, Type } from '../../models/models';
import * as FilesActions from './files.actions';

export interface FilesState {
  files: File[];
  types: Type[];
  error: string | null;
  loading: boolean;
}

export const initialState: FilesState = {
  files: [],
  types: [],
  error: null,
  loading: false,
};

export const filesReducer = createReducer(
  initialState,

  on(FilesActions.loadFiles, state => ({ ...state, loading: true })),

  on(FilesActions.loadFilesSuccess, (state, { files }) => ({ 
    ...state,
    files: files,
    error: null,
    loading: false,
  })),

  on(FilesActions.loadFilesFailure, (state, { error }) => ({ 
    ...state,
    error: error,
    loading: false,
  })),  

  on(FilesActions.loadTypes, state => ({ ...state, loading: true })),

  on(FilesActions.loadTypesSuccess, (state, { types }) => ({ 
    ...state,
    types: types,
    error: null,
    loading: false,
  })),

  on(FilesActions.loadTypesFailure, (state, { error }) => ({ 
    ...state,
    error: error,
    loading: false,
  })),
);