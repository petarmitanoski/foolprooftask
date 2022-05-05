import { createSelector } from "@ngrx/store";

import { AppState } from "../app.state";
import { FilesState } from "./files.reducer";

export const selectFilesState = (state: AppState) => state.filesState;

export const selectAllFiles = createSelector(
    selectFilesState,
    (state: FilesState) => state?.files
);

export const selectIsLoading = createSelector(
    selectFilesState,
    (state: FilesState) => state?.loading
);

export const selectAllTypes = createSelector(
    selectFilesState,
    (state: FilesState) => state?.types
);
