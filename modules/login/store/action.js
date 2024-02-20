import * as types from './action-types';
import * as API from './api'

export const userLogin = (payload) => {
    const request = API.userLogin(payload);
    return {
        payload: request,
        type: types.USER_LOGIN
    }
}

export const loginSuccess = (result) =>{
    return {
        type: types.USER_LOGIN_SUCCESS,
        result: result
    }
}

export const loginFailure = (error) =>{
    return {
        type: types.USER_LOGIN_FAILURE,
        error: error.result
    }
}