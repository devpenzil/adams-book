
import { signupworking } from "./signupSaga"
import {signinworking} from './loginsaga'
import {all} from 'redux-saga/effects'
export default function* rootsaga(){
    yield all([
        signupworking(),
        signinworking()
    ])
}