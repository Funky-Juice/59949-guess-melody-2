import GameTimer from '../game-timer/game-timer';
import GameMistakes from '../game-mistakes/game-mistakes';


const GameHeader = (props) => {
  const {time, errors, onTick, onTimeEnd} = props;

  return <header className="game__header">
    <a className="game__back" href="#">
      <span className="visually-hidden">Сыграть ещё раз</span>
      <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"></img>
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
      <circle className="timer__line" cx="390" cy="390" r="370"
        style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
    </svg>

    <GameTimer time={time} onTick={onTick} onTimeEnd={onTimeEnd}/>

    <GameMistakes errors={errors}/>
  </header>;
};

GameHeader.propTypes = {
  time: PropTypes.number.isRequired,
  errors: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired
};

export default GameHeader;
