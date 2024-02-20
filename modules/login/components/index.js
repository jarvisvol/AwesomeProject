import { connect } from 'react-redux';
import { sampleAction } from '../store/action';
import Login from './screen/Login';

const mapStateToProps = (state) => {
  return {
    myData: state.authReducer.mydata
    // Add more properties as needed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sampleAction: (value) => {
      dispatch(sampleAction(value));
    }
    // Add more action creators as needed
  };
};

// Connect the component to the Redux store
export default LoginComponent =  connect(mapStateToProps, mapDispatchToProps)(Login);
