import {takeEvery} from 'redux-saga/effects'
import { signingup } from '../slices/signupSlice'
import {sign_up, API_KEY} from '../../constants/constants'
import axios from '../../axios/authinstance'

export function* signupworking(){
    yield takeEvery(signingup, signedup)
}
// todo Add an API call for Create a new collection for the user
export function* signedup(dispatch){
    const credential = dispatch.payload
    yield axios.post(`${sign_up}${API_KEY}`,{
        "email" : credential.email,
        "password" : credential.password,
        "displayName" : credential.username,
        "returnSecureToken": true
    }).then((Response)=>{
        console.log(Response.data)
        alert("Account successfull created")
    }).catch((Error)=>{
        console.log(Error)
    })
    
}