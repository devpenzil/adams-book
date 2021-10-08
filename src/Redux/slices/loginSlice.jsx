import {createSlice} from '@reduxjs/toolkit'

export const logIn = createSlice({
    name : "login",
    initialState:{
        value: {}
    },
    reducers:{
        loggingin: (state,action) => {
            state.value = action.payload
            // console.log(action.payload) 
        },
        loggingerror: (state,action) => {
            state.value = action.payload
            // console.error(state.value)
            return state
        }
    }
})

export const {loggingin, loggingerror} = logIn.actions
export default logIn.reducer