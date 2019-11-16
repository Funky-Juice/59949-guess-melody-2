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
    }

    render() {
      const {activePlayer} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(it, i) => {
          return <AudioPlayerWrapped
            src={it.src}
            isPlaying={i === activePlayer}
            onPlayButtonClick={() => this.setState((prevState) => ({
              activePlayer: prevState.activePlayer === i ? -1 : i
            }))}
          />;
        }}
      />;
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
