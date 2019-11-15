const AudioPlayer = (props) => {
  const {audioRef, isLoading, isPlaying, onPlayButtonClick} = props;

  return (<>
    <button
      className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
      type="button"
      disabled={isLoading}
      onClick={onPlayButtonClick}
    ></button>
    <div className="track__status">
      <audio ref={audioRef}/>
    </div>
  </>);
};

AudioPlayer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  audioRef: PropTypes.object.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired
};

export default AudioPlayer;
