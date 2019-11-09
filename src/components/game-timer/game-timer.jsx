import {PureComponent} from 'react';

class GameTimer extends PureComponent {
  constructor(props) {
    super(props);

    this.timer = null;
  }

  componentDidMount() {
    const {onTick} = this.props;
    this.timer = setInterval(() => onTick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {time} = this.props;

    return <>
      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">{time}</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">00</span>
      </div>
    </>;
  }
}

GameTimer.propTypes = {
  time: PropTypes.number.isRequired,
  onTick: PropTypes.func.isRequired,
};

export default GameTimer;
