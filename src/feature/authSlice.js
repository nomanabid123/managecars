import {createSlice} from '@reduxjs/toolkit';

//initialState for authSlice
const initialState = {
    isAuth: false,
    token: null
};

//authSlice
const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuth = false;
            state.token = null;
        }
    }
});


export const {login,logout} = authSlice.actions;
export default authSlice.reducer;
