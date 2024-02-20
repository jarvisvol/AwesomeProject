import * as types from './action-types';

const initialState = {
    mydata:'',
    loginData: {},
    error:{}
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SAMPLE_TYPE_ACTION:
            return {
                ...state,
                mydata:action.value
            }
        case types.USER_LOGIN_SUCCESS:
            console.log(action);
            return {
                ...state,
                loginData: action.result
            }
            case types.USER_LOGIN_FAILURE:
            return {
                ...state,
                error: action.error
            }
            default:
                return state;
    }
}

export default authReducer;
