
import {takeEvery} from 'redux-saga/effects'
import { signingup } from '../slices/signupSlice'
import axios from '../../axios/authinstance'

export function* signupworking(){
    yield takeEvery(signingup, signedup)
}

export function* signedup(){
    yield console.log('saga working')
    // yield axios.get()
}