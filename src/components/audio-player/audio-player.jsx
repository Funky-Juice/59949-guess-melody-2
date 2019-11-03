import PropTypes from 'prop-types';
import {Fragment, createRef, PureComponent} from 'react';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();
    this._onPlayBtnClick = this._onPlayBtnClick.bind(this);

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  render() {
    const {isLoading, isPlaying} = this.state;
    return (<Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={this._onPlayBtnClick}
      ></button>
      <div className="track__status">
        <audio ref={this._audioRef}/>
      </div>
    </Fragment>);
  }

  _onPlayBtnClick() {
    this.props.onPlayButtonClick();
    this.setState({isPlaying: !this.state.isPlaying});
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;

    audio.src = src;
    audio.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    audio.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    audio.onpause = () => {
      this.setState({
        isPlaying: false
      });
    };
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};

export default AudioPlayer;
