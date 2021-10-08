import {createSlice} from '@reduxjs/toolkit'

export const addNotes =  createSlice({
    name : "add",
    initialState:{
        value: ""
    },
    reducers:{
        addingNotes : (state,action) => {
            state.value = action.payload
            return state
        }
    }
})
export const {addingNotes} = addNotes.actions
export default addNotes.reducer