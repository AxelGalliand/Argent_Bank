import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLogged: false,
        token: null,
        firstName: null,
        lastName: null,

    },
    reducers: {
        /**
         * @param {object} payload info user
         */
        signIn: (state, {payload}) => {
            state.lastName = payload.lastName
            state.firstName = payload.firstName
        },
        /**
         * @param {string} payload token
         */
        setToken: (state, {payload}) => {
            state.token = payload
            state.isLogged = true
        },
        /**
         * @param {object}
         */
        signOut: (state) => {
            state.isLogged = false,
            state.token = null,
            state.firstName = null,
            state.lastName = null,
            localStorage.removeItem('token')
    
        }

    }
})

export const {increment, add, decrement, signIn, setToken, signOut } = userSlice.actions
export const stateUser = (state) => state.user;
export default userSlice.reducer;