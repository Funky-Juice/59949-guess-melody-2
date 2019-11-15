class GameTimer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.timer = null;

    this.minutes = `00`;
    this.seconds = `00`;
  }

  componentDidMount() {
    const {onTick} = this.props;
    this.timer = setInterval(() => onTick(), 1000);
  }

  componentDidUpdate() {
    const {time, onTimeEnd} = this.props;
    this._timeConverter();
    return (time < 0 && onTimeEnd());
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _timeConverter() {
    const {time} = this.props;

    this.minutes = `0` + Math.floor(time / 60);
    this.seconds = `0` + (time - this.minutes * 60);
  }

  render() {
    this._timeConverter();

    return <>
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{this.minutes.substr(-2)}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">{this.seconds.substr(-2)}</span>
      </div>
    </>;
  }
}

GameTimer.propTypes = {
  time: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
  onTimeEnd: PropTypes.func.isRequired
};

export default GameTimer;
