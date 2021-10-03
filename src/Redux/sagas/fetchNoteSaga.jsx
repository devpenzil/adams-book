import {takeEvery} from 'redux-saga/effects'
import { fetchingnotes } from '../slices/fetchNoteSlice'
import axios from '../../axios/storeinstance'

export function* fetching(){
    yield takeEvery(fetchingnotes, fetchwork)
}
export function* fetchwork(dispatch){
    // * Notes.json is the collection name
    yield axios.get(`users/${localStorage.getItem("localId")}/notes.json`).then((Response)=>{
        dispatch = Response.data
        console.log(dispatch)
    }).catch((Error)=>{
        alert(Error)
    })    
}
