import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user: null,
    isAuthReady: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        isAuthChanged: (state, action) => { },
    },
});

export const { login, logout, isAuthChanged } = userSlice.actions;
export default userSlice.reducer;