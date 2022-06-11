import { RootState } from "../../app/store";

export const lookupStatus = (state: RootState) => state.users.lookupStatus;
export const lookupResult = (state: RootState) => state.users.lookupResult;
export const loadedUsers = (state: RootState) => state.users.loadedUsers;
