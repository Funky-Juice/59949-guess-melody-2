import ActionCreator from '../../store/actions';
import {connect} from 'react-redux';
import App from './app';

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    level: state.level,
    mistakes: state.mistakes,
    questions: state.questions
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGameEnd: () => dispatch(ActionCreator.resetGame()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementLevel());
    dispatch(ActionCreator.incrementMistakes(userAnswer, question, mistakes, maxMistakes));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
