import * as types from './action-types';

const initialState = {
    mydata:''
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case types.SAMPLE_TYPE_ACTION:
            return {
                ...state,
                mydata:action.value
            }
            default:
                return state;
    }
}

export default authReducer;
