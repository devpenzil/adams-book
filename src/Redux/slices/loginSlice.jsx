import {createSlice} from '@reduxjs/toolkit'

export const logIn = createSlice({
    name : "signup",
    initialState:{
        value: {}
    },
    reducers:{
        loggingin: (state,action) => {
            state.value = action.payload
            // console.log(action.payload) 
        }
    }
})

export const {loggingin} = logIn.actions
export default logIn.reducer