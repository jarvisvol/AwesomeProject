import * as types from './action-types';

const initialState = {
    mydata:'',
    loginData: {},
    error:{},
    statusOfActions: ''
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SAMPLE_TYPE_ACTION:
            return {
                ...state,
                mydata:action.value,
                statusOfActions: action.type
            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loginData: action.result.data,
                statusOfActions: action.type
            }
            case types.USER_LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                statusOfActions: action.type
            }
            default:
                return state;
    }
}

export default authReducer;
