import {SETJOBS, SETPAGE} from './actionTypes'

const initialState = {
    jobs: null,
    page: 1
}

const jobReducer = (state=initialState, action) => {
    switch(action.type){

        case SETJOBS:
            return {...state, jobs: action.payload}

        case SETPAGE:
            return {...state, page: action.payload}

        default:
            return state
    }
}

export default jobReducer