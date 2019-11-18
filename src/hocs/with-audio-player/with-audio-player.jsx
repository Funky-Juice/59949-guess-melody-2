const withAudioPlayer = (Component) => {
  class WithAudioPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = React.createRef();

      this.state = {
        isLoading: true,
        isPlaying: props.isPlaying
      };

      this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
    }

    _onPlayButtonClick() {
      const {id, onPlayButtonClick} = this.props;

      onPlayButtonClick(id);
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

      return this.props.isPlaying ? audio.play() : audio.pause();
    }

    componentWillUnmount() {
      const audio = this._audioRef.current;

      audio.oncanplaythrough = null;
      audio.onplay = null;
      audio.onpause = null;
      audio.src = null;
    }

    render() {
      return <Component
        {...this.props}
        audioRef={this._audioRef}
        isLoading={this.state.isLoading}
        onPlayButtonClick={this._onPlayButtonClick}
      />;
    }
  }

  WithAudioPlayer.propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired
  };

  return WithAudioPlayer;
};

export default withAudioPlayer;
