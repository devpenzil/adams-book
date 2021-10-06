import {takeEvery} from 'redux-saga/effects'
import { signingup } from '../slices/signupSlice'
import {sign_up, API_KEY} from '../../constants/constants'
import axios from '../../axios/authinstance'
import axiosStore from '../../axios/storeinstance'

export function* signupworking(){
    yield takeEvery(signingup, signedup)
}

// todo - Add an API call for Create a new collection for the user
export function* signedup(dispatch){
    const credential = dispatch.payload
    yield axios.post(`${sign_up}${API_KEY}`,{
        "email" : credential.email,
        "password" : credential.password,
        "displayName" : credential.username,
        "returnSecureToken": true
    }).then((Response)=>{
        localStorage.setItem("localId", Response.data.localId)
        alert("Account successfull created")
    }).then(()=>{
        axiosStore.put(`/users/${localStorage.getItem("localId")}.json`,{
                "username": credential.username
        }).then((Response)=>{
            console.log("success")
        }).catch((Error)=>{
            console.log(Error.message)
        })
    }).catch((Error)=>{
        alert(Error.message)
    })
}