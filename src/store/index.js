import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import jobReducer from "./jobReducer"

const reducers = combineReducers({
    job: jobReducer
})

const Store = createStore(reducers, applyMiddleware(thunk))

export default Store