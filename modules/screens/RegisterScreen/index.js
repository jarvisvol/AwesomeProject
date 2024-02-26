import { connect } from 'react-redux';
import { userRegister } from '../../login/store/action.js';
import Register from './Register';

const mapStateToProps = (state) => {
  return {
    registerData: state.authReducer.registerData,
    statusOfActions: state.authReducer.statusOfActions,
    isLoading: state.authReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userRegister: (payload) => {
      dispatch(userRegister(payload));
    }
  };
};

export default RegisterComponent =  connect(mapStateToProps, mapDispatchToProps)(Register);
