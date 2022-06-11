import { createSlice } from "@reduxjs/toolkit";
import { LookupStatus, User } from "./types";
import * as actions from "./actions";

export interface UsersState {
    lookupStatus: LookupStatus;
    lookupResult: User | null;
    loadedUsers: User[];
}

const initialState: UsersState = {
    lookupStatus: "idle",
    lookupResult: null,
    loadedUsers: [],
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actions.lookupUser.pending, (state, action) => {
            state.lookupStatus = "pending";
        });
        builder.addCase(actions.lookupUser.fulfilled, (state, action) => {
            if (action.payload) {
                state.lookupStatus = "success";
                state.loadedUsers.push(action.payload);
            } else {
                state.lookupStatus = "failure";
            }
        });
        builder.addCase(actions.lookupUser.rejected, (state, action) => {
            state.lookupStatus = "failure";
        });
        builder.addCase(actions.removeUser, (state, action) => {
            const index = state.loadedUsers.findIndex(user => user.username === action.payload.username);
            state.loadedUsers.splice(index, 1)
        });
        builder.addCase(actions.setUserRole, (state, action) => {
            const index = state.loadedUsers.findIndex(user => user.username === action.payload.username);
            state.loadedUsers[index].role = action.payload.role;
        });
    }
});
