import axios from 'axios';
import {BACKEND_API} from '../../utils/constant';
import { SET_ERRORS } from './type';

const signin = (data , navigate) => dispatch => {
    axios.post(`${BACKEND_API}/api/user/signin` , data)
        .then(res => {
            navigate('/');
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

const signup = (data) => dispatch => {
    axios.post(`${BACKEND_API}/api/user/signup` , data)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export {signin , signup};
