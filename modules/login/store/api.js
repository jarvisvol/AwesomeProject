import HTTP from '../../Utils/HTTP.js';
import store from '../../store/store.js';

import {
    loginSuccess,
    loginFailure
} from './action.js'

export const userLogin = async(payload) => {
        try {
            const result = await HTTP.post('/user/login', payload);
            store.dispatch(loginSuccess(result.data));
        } catch (error) {
            store.dispatch(loginFailure(error));
        }
}