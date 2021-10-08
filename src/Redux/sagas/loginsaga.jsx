import {takeEvery, put, call} from 'redux-saga/effects'
import { loggingin , loggingerror } from '../slices/loginSlice'
import {sign_in, API_KEY} from '../../constants/constants'
import axios from '../../axios/authinstance'
export function* signinworking(){
    yield takeEvery(loggingin, loggedin)
}

export function* loggedin(dispatch){
    const credential = dispatch.payload

    try {
        const Response = yield call(axios.post,`${sign_in}${API_KEY}`,{
                "email" : credential.email,
                "password" : credential.password,
                "returnSecureToken": true
            })
        // yield console.log(Response)
        localStorage.setItem("displayName",Response.data.displayName)
        localStorage.setItem("idToken",Response.data.idToken)
        localStorage.setItem("localId",Response.data.localId)
        localStorage.setItem("email",Response.data.email)
        return Response
      } catch(error) {
        yield put(loggingerror(error.response.data.error.message))
        alert(error.response.data.error.message)
      }   
}
