import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
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
        }
    }

})

export const {increment, add, decrement } = userSlice.actions
export const stateUser = (state) => state.user;
export default userSlice.reducer;