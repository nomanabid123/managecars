import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isAuth: false,
    token: null,
};

const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.token = action.payload.token;
        }
    }
});


export const {login} = authSlice.actions;
export default authSlice.reducer;