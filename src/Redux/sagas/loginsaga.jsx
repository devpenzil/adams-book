import {takeEvery} from 'redux-saga/effects'
import { loggingin } from '../slices/loginSlice'
import {sign_in, API_KEY} from '../../constants/constants'
import axios from '../../axios/authinstance'
export function* signinworking(){
    yield takeEvery(loggingin, loggedin)
}

export function* loggedin(dispatch){
    const credential = dispatch.payload
    yield axios.post(`${sign_in}${API_KEY}`,{
        "email" : credential.email,
        "password" : credential.password,
        "returnSecureToken": true
    }).then((Response)=>{
        console.log(Response.data)
        localStorage.setItem("displayName",Response.data.displayName)
        localStorage.setItem("idToken",Response.data.idToken)
        localStorage.setItem("localId",Response.data.localId)
        alert("You are logged in")
    }).catch((Error)=>{
        alert(Error)
    })    
}