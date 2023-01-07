import { isEmpty } from "../../validation/isEmpty"
import { CLEAR_AUTH, SET_AUTH } from "../action/type"

const initialState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = initialState , action) => {
    switch(action.type){
        case SET_AUTH:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case CLEAR_AUTH:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }
        default:
            return state;
    }
}


export {authReducer};
