import ActionCreator from '../../store/actions';
import {connect} from 'react-redux';
import GameTimer from './game-timer';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    time: state.time
  });
};

const mapDispatchToProps = (dispatch) => ({
  onTick: () => dispatch(ActionCreator.reduceTime()),
  onTimeEnd: () => dispatch(ActionCreator.resetGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(GameTimer);
