import { isEmpty } from "../../validation/isEmpty"
import { CLEAR_ERRORS, SET_ERRORS } from "../action/type"

const initialState = {
    isValid: true,
    errors: {}
}


const errorReducer = (state = initialState , action) => {
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                isValid: isEmpty(action.payload),
                errors: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                isValid: true,
                errors: {}
            }
        default:
            return state;
    }
}


export {errorReducer};
