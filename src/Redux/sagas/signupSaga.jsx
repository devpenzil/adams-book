import {takeEvery, put} from 'redux-saga/effects'
import { signingup } from '../slices/signupSlice'
import {sign_up, API_KEY} from '../../constants/constants'
import axios from '../../axios/authinstance'

export function* signupworking(){
    yield takeEvery(signingup, signedup)
}

export function* signedup(dispatch){
    const credential = dispatch.payload
    yield axios.post(`${sign_up}${API_KEY}`,{
        "email" : credential.email,
        "password" : credential.password,
        "displayName" : credential.username,
        "returnSecureToken": true
    }).then((Response)=>{
        console.log(Response.data)
    }).catch((Error)=>{
        console.log(Error)
    })
}