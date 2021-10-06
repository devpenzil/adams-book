import { takeEvery } from "redux-saga/effects"
import { addingNotes } from "../slices/addNoteSlice"
import axiosstore from '../../axios/storeinstance'

export function* addNotes(){
    yield takeEvery(addingNotes , added)
}

export function* added(dispatch){
    const credential = dispatch.payload
    axiosstore.post(`users/${localStorage.getItem("localId")}/notes.json` ,{
        "title": credential.title,
        "content": credential.content,
        "date": credential.date
    }).then((Response)=>{
        alert("Note added successfully")
    }).catch((Error)=>{
        console.log(Error)
    })
}