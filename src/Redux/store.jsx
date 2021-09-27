import signUpReducer, { signingup } from './slices/signupSlice'
import {signupworking} from './sagas/signupSaga'
import {configureStore , applyMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
const middleware = applyMiddleware(createSagaMiddleware)
const sagaMiddleware = createSagaMiddleware()
export default configureStore({
    reducer:{
        "signingup" : signUpReducer,
    },
    middleware:[ sagaMiddleware]
})
sagaMiddleware.run(signupworking)