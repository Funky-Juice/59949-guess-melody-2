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
    return App.getScreen(this.props);
  }

  static getScreen(props) {
    const {level, questions, gameTime, errorCount, onLevelChange, onGameEnd} = props;

    if (level === -1) {
      return <WelcomeScreen
        time={gameTime}
        errors={errorCount}
        onStartBtnClick={onLevelChange}
      />;
    }

    const currentQuestion = questions[level];

    switch (currentQuestion.type) {
      case `genre`: return <GuessGenreScreen
        question={currentQuestion}
        time={gameTime}
        errors={errorCount}
        onAnswer={onLevelChange}
        screenIndex={level}
      />;

      case `artist`: return <GuessArtistScreen
        question={currentQuestion}
        time={gameTime}
        errors={errorCount}
        onAnswer={onGameEnd}
        screenIndex={level}
      />;
    }

    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    level: state.level
  });
};

const mapDispatchToProps = (dispatch) => ({
  onLevelChange: () => dispatch(ActionCreator.incrementLevel()),
  onGameEnd: () => dispatch(ActionCreator.resetGame())
});


App.propTypes = {
  level: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onLevelChange: PropTypes.func.isRequired
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
