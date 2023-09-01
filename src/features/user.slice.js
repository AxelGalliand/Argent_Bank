import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        token: null,
        number: 1
    },
    reducers: {
        increment: (state) => {
            state.number++
        },
        /**
         * @param {number} payload 
         */
        add: (state, {payload}) => {
            state.number += payload
        },
        decrement: (state) => {
            state.number--
        },
        /**
         * @param {string} payload token
         */
        signIn: (state, {payload}) => {
            state.token = payload
            state.isLogged = true
        }
    }

})

export const {increment, add, decrement, signIn } = userSlice.actions
export const stateUser = (state) => state.user;
export default userSlice.reducer;