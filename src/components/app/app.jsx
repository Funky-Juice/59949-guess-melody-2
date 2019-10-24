import {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen';

class App extends PureComponent {
  static getScreen(questionNum, props, onUserAnswer) {
    const {questions, gameTime, errorCount} = props;

    if (questionNum === -1) {
      return <WelcomeScreen time={gameTime} errors={errorCount} onStartBtnClick={onUserAnswer}/>;
    }

    const currentQuestion = questions[questionNum];

    switch (currentQuestion.type) {
      case `genre`: return <GuessGenreScreen
        question={currentQuestion} time={gameTime} errors={errorCount} onAnswer={onUserAnswer}
      />;
      case `artist`: return <GuessArtistScreen
        question={currentQuestion} time={gameTime} errors={errorCount} onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      questionNumber: -1
    };
  }

  render() {
    const {questionNumber} = this.state;

    return App.getScreen(questionNumber, this.props, () => {
      this.setState((prevState) => ({
        questionNumber: prevState.questionNumber + 1
      }));
    });
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};

export default App;
