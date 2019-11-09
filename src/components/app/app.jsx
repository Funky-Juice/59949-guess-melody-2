import {PureComponent} from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../store/actions';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import GameScreen from '../game-screen/game-screen';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {level, time, questions, onGameEnd} = this.props;

    if (level >= questions.length || time < 0) {
      onGameEnd();
      return null;
    }

    return App.getScreen(this.props);
  }

  static getScreen(props) {
    const {level, questions, time, mistakes, maxMistakes, onTick, onGameStart, onUserAnswer} = props;

    if (level === -1) {
      return <WelcomeScreen
        time={time}
        errors={maxMistakes}
        onStartBtnClick={onGameStart}
      />;
    }

    return <GameScreen
      question={questions[level]}
      maxMistakes={maxMistakes}
      mistakes={mistakes}
      level={level}
      time={time}
      onTick={onTick}
      onUserAnswer={onUserAnswer}
    />;
  }
}

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


App.propTypes = {
  time: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onGameEnd: PropTypes.func.isRequired,
  onGameStart: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
