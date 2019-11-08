const GameTimer = (props) => {
  const {time} = props;

  return <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
    <span className="timer__mins">{time}</span>
    <span className="timer__dots">:</span>
    <span className="timer__secs">00</span>
  </div>;
};

GameTimer.propTypes = {
  time: PropTypes.number.isRequired
};

export default GameTimer;
