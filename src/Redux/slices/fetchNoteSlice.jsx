import {createSlice} from '@reduxjs/toolkit'

export const fetchNote = createSlice({
    name : "fetch",
    initialState:{
        value: {}
    },
    reducers:{
        fetchingnotes: (state,action) => {
            state.value = action.payload
            console.log(action.payload) 
        }
    }
})

export const {fetchingnotes} = fetchNote.actions
export default fetchNote.reducer