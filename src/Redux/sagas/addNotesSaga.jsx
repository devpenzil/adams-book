import { takeEvery, call, put } from "redux-saga/effects"
import { addingNotes } from "../slices/addNoteSlice"
import axiosstore from '../../axios/storeinstance'
import {fetchingnotes} from '../slices/fetchNoteSlice'
export function* addNotes(){
    yield takeEvery(addingNotes , added)
}

export function* added(dispatch){
    const credential = dispatch.payload
    try {
        const note = yield call(axiosstore.post,`users/${localStorage.getItem("localId")}/notes.json`,{
                    "title": credential.title,
                    "content": credential.content,
                    "date": credential.date
                })
        alert("Note added successfully")
        yield put(fetchingnotes())
        return note
      } catch(error) {
        alert("some error")
      }
}

