import WelcomeScreen from '../welcome-screen/welcome-screen';
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
    const {level, questions, time, mistakes, maxMistakes, onTick, onGameStart, onGameEnd, onUserAnswer} = props;

    if (level === -1) {
      return <WelcomeScreen
        time={time}
        maxMistakes={maxMistakes}
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
      onTimeEnd={onGameEnd}
      onUserAnswer={onUserAnswer}
    />;
  }
}


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

export default App;
