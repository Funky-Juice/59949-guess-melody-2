import ActionCreator from '../../store/actions';
import {connect} from 'react-redux';
import WelcomeScreen from './welcome-screen';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    time: state.time
  });
};

const mapDispatchToProps = (dispatch) => ({
  onStartBtnClick: () => dispatch(ActionCreator.incrementLevel())
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
