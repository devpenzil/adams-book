import {createSlice} from '@reduxjs/toolkit'

export const signUp = createSlice({
    name : "signup",
    initialState:{
        value: {}
    },
    reducers:{
        signingup: (state,action) => {
            state.value = action.payload
            // console.log(action.payload) 
        }
    }
})

export const {signingup} = signUp.actions
export default signUp.reducer