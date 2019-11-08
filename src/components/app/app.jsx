import {PureComponent} from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../store/actions';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {level, questions, onGameEnd} = this.props;

    if (level >= questions.length) {
      onGameEnd();
      return null;
    }

    return App.getScreen(this.props);
  }

  static getScreen(props) {
    const {level, questions, gameTime, mistakes, maxMistakes, onGameStart, onUserAnswer} = props;

    if (level === -1) {
      return <WelcomeScreen
        time={gameTime}
        errors={maxMistakes}
        onStartBtnClick={onGameStart}
      />;
    }

    const currentQuestion = questions[level];

    switch (currentQuestion.type) {
      case `genre`: return <GuessGenreScreen
        question={currentQuestion}
        time={gameTime}
        errors={mistakes}
        onAnswer={(answer) => onUserAnswer(answer, currentQuestion, mistakes, maxMistakes)}
        screenIndex={level}
      />;

      case `artist`: return <GuessArtistScreen
        question={currentQuestion}
        time={gameTime}
        errors={mistakes}
        onAnswer={(answer) => onUserAnswer(answer, currentQuestion, mistakes, maxMistakes)}
        screenIndex={level}
      />;
    }

    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    level: state.level,
    mistakes: state.mistakes
  });
};

const mapDispatchToProps = (dispatch) => ({
  onGameStart: () => dispatch(ActionCreator.incrementLevel()),

  onGameEnd: () => dispatch(ActionCreator.resetGame()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementLevel());
    dispatch(ActionCreator.incrementMistakes(userAnswer, question, mistakes, maxMistakes));
  }
});


App.propTypes = {
  level: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onGameEnd: PropTypes.func.isRequired,
  onGameStart: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
