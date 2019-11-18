import AudioPlayer from '../../components/audio-player/audio-player.jsx';
import withAudioPlayer from '../with-audio-player/with-audio-player';

const AudioPlayerWrapped = withAudioPlayer(AudioPlayer);

const withActivePlayer = (Component) => {
  class WithActivePlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1,
      };

      this._playButtonClickHandler = this._playButtonClickHandler.bind(this);
    }

    _playButtonClickHandler(playerID) {
      this.setState((prevState) => ({
        activePlayer: prevState.activePlayer === playerID ? -1 : playerID
      }));
    }

    render() {
      const {activePlayer} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(it, i) => {
          return <AudioPlayerWrapped
            id={i}
            src={it.src}
            isPlaying={i === activePlayer}
            onPlayButtonClick={this._playButtonClickHandler}
          />;
        }}
      />;
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
