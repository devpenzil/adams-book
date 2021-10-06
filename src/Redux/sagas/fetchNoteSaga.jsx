import {put, call, takeEvery} from 'redux-saga/effects'
import { fetchingnotes , fetchSuccess, fetchError } from "../slices/fetchNoteSlice";
import axios from "../../axios/storeinstance";


export function* fetching() {
  yield takeEvery(fetchingnotes, fetchwork);
}
export function* fetchwork() {
  // * Notes.json is the collection name

  try {
    const note = yield call(axios.get,`users/${localStorage.getItem("localId")}/notes.json`)
    yield put(fetchSuccess(note.data))
    return note
  } catch(error) {
    yield put(fetchError(error.message))
  }
}
