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
    const {step} = this.props;
    return App.getScreen(step, this.props);
  }

  static getScreen(step, props) {
    const {questions, gameTime, mistakes, maxMistakes, onWelcomeScreenClick, onUserAnswer} = props;

    if (step === -1) {
      return <WelcomeScreen
        time={gameTime}
        errors={maxMistakes}
        onStartBtnClick={onWelcomeScreenClick}
      />;
    }

    const currentQuestion = questions[step];

    switch (currentQuestion.type) {
      case `genre`: return <GuessGenreScreen
        screenIndex={step}
        question={currentQuestion}
        time={gameTime}
        errors={maxMistakes}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <GuessArtistScreen
        screenIndex={step}
        question={currentQuestion}
        time={gameTime}
        errors={maxMistakes}
        onAnswer={(userAnswer) => onUserAnswer(
            userAnswer,
            currentQuestion,
            mistakes,
            maxMistakes
        )}
      />;
    }

    return null;
  }
}

App.propTypes = {
  step: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired
};


const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    step: state.step,
    mistakes: state.mistakes
  });
};

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question,
        mistakes,
        maxMistakes
    ));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
