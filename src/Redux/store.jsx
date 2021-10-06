import signUpReducer from './slices/signupSlice'
import logInReducer from './slices/loginSlice'
import FetchReducer from './slices/fetchNoteSlice'
import rootsaga from './sagas/rootsaga'
import {configureStore , applyMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
const middleware = applyMiddleware(createSagaMiddleware)
const sagaMiddleware = createSagaMiddleware()
export default configureStore({
    reducer:{
        "signingup" : signUpReducer,
        "login" : logInReducer,
        "fetch": FetchReducer
    },
    middleware:[ sagaMiddleware]
})
sagaMiddleware.run(rootsaga)