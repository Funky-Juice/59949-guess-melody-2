import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen';
import GameHeader from '../game-header/game-header';
import {PureComponent} from 'react';


class GameScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  _getGameScreen(props) {
    const {question, mistakes, maxMistakes, level, onUserAnswer} = props;

    switch (question.type) {
      case `genre`: return <GuessGenreScreen
        question={question}
        onAnswer={(answer) => onUserAnswer(answer, question, mistakes, maxMistakes)}
        screenIndex={level}
      />;

      case `artist`: return <GuessArtistScreen
        question={question}
        onAnswer={(answer) => onUserAnswer(answer, question, mistakes, maxMistakes)}
        screenIndex={level}
      />;
    }
    return null;
  }

  render() {
    const {question, mistakes, time, onTick, onTimeEnd} = this.props;

    return <>
      <article id={`game-${question.type}`}>
        <section className={`game game--${question.type}`}>
          <GameHeader
            time={time}
            mistakes={mistakes}
            onTick={onTick}
            onTimeEnd={onTimeEnd}
          />
          {this._getGameScreen(this.props)}
        </section>
      </article>
    </>;
  }
}

GameScreen.propTypes = {
  time: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

export default GameScreen;
