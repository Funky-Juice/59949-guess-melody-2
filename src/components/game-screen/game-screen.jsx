import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import GuessGenreScreen from '../guess-genre-screen/guess-genre-screen';
import GuessArtistScreen from '../guess-artist-screen/guess-artist-screen';
import GameHeader from '../game-header/game-header';

const GuessGenreScreenWrapped = withActivePlayer(GuessGenreScreen);
const GuessArtistScreenWrapped = withActivePlayer(GuessArtistScreen);

class GameScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _getGameScreen(props) {
    const {question, mistakes, maxMistakes, level, onUserAnswer} = props;

    switch (question.type) {
      case `genre`: return <GuessGenreScreenWrapped
        question={question}
        onAnswer={(answer) => onUserAnswer(answer, question, mistakes, maxMistakes)}
        screenIndex={level}
      />;

      case `artist`: return <GuessArtistScreenWrapped
        question={question}
        onAnswer={(answer) => onUserAnswer(answer, question, mistakes, maxMistakes)}
        screenIndex={level}
      />;
    }
    return null;
  }

  render() {
    const {question, mistakes} = this.props;

    return <>
      <article id={`game-${question.type}`}>
        <section className={`game game--${question.type}`}>
          <GameHeader mistakes={mistakes}/>

          {this._getGameScreen(this.props)}
        </section>
      </article>
    </>;
  }
}

GameScreen.propTypes = {
  level: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

export default GameScreen;
