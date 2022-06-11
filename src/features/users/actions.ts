import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "./types";
import * as usersAPI from "./usersAPI";

export const lookupUser = createAsyncThunk(
    'users/lookupUser',
    async ({ username }: { username: string }, thunkAPI) => {
        const response = await usersAPI.lookupByUsername(username);
        if (response.ok) {
            const json = await response.json();
            const user: User = {
                username: json.login,
                fullname: json.name,
                avatar: json.avatar_url,
            }
            return user;
        } else {
            return null;
        }
    }
)

export const removeUser = createAction<{ username: string }>("users/removeUser")
export const setUserRole = createAction<{ username: string, role: string }>("users/setUserRole")
