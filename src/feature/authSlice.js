import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    user: null,
    access_token: null,
};

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.user = action.payload.user;
            state.access_token = action.payload.access_token;
        }
    }
});


export const {login} = authSlice.actions;
export default authSlice.reducer;