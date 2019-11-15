import ActionCreator from '../../store/actions';
import {connect} from 'react-redux';
import App from './app';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    time: state.time,
    level: state.level,
    mistakes: state.mistakes
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGameStart: () => dispatch(ActionCreator.incrementLevel()),

  onGameEnd: () => dispatch(ActionCreator.resetGame()),

  onTick: () => dispatch(ActionCreator.reduceTime()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementLevel());
    dispatch(ActionCreator.incrementMistakes(userAnswer, question, mistakes, maxMistakes));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
