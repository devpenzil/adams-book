import {createSlice} from '@reduxjs/toolkit'

export const fetchNote = createSlice({
    name : "fetch",
    initialState:{
        value: {}
    },
    reducers:{
        fetchingnotes: (state,action) => {
            state.value = action.payload
        },
        fetchSuccess: (state,action) => {
            state.value = action.payload
            console.log(state.value)
            return state
            
        },
        fetchError: (state,action) => {
            state.value = action.payload
            console.error(state.value)
            return state
        }
    }
})

export const {fetchingnotes, fetchSuccess, fetchError} = fetchNote.actions
export default fetchNote.reducer