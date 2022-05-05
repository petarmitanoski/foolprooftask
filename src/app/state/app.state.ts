import { FilesState } from "./files/files.reducer";
import { UsersState } from "./users/users.reducer";

export interface AppState {
    usersState: UsersState;
    filesState: FilesState;
}