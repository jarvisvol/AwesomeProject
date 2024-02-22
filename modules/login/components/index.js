import { connect } from 'react-redux';
import { userLogin } from '../store/action';
import Login from './screen/Login';

const mapStateToProps = (state) => {
  return {
    loginData: state.authReducer.loginData,
    statusOfActions: state.authReducer.statusOfActions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (payload) => {
      dispatch(userLogin(payload));
    }
  };
};

export default LoginComponent =  connect(mapStateToProps, mapDispatchToProps)(Login);
