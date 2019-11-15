import WelcomeScreen from '../welcome-screen';
import GameScreen from '../game-screen/game-screen';

class App extends React.PureComponent {
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
    const {level, questions, mistakes, maxMistakes, onUserAnswer} = props;

    if (level === -1) {
      return <WelcomeScreen maxMistakes={maxMistakes}/>;
    }

    return <GameScreen
      question={questions[level]}
      maxMistakes={maxMistakes}
      mistakes={mistakes}
      level={level}
      onUserAnswer={onUserAnswer}
    />;
  }
}

App.propTypes = {
  level: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  onGameEnd: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

export default App;
