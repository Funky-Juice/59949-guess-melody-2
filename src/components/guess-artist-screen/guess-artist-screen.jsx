import {PureComponent} from 'react';
import AudioPlayer from '../audio-player/audio-player';

class GuessArtistScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {question, onAnswer, screenIndex} = this.props;
    const {isPlaying} = this.state;

    return <>
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer
              src={question.song.src}
              isPlaying={isPlaying}
              onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
            />
          </div>
        </div>

        <form className="game__artist">
          {question.answers.map((answer) =>
            <div className="artist" key={`${screenIndex}-answer-${answer.id}`}>
              <input
                id={`answer-${answer.id}`}
                value={answer.artist}
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                onChange={(evt) => {
                  onAnswer(evt.target.value);
                }}
              ></input>
              <label className="artist__name" htmlFor={`answer-${answer.id}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}></img>
                {answer.artist}
              </label>
            </div>
          )}
        </form>
      </section>
    </>;
  }
}

GuessArtistScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`artist`]).isRequired,
    song: PropTypes.shape({
      src: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }))
  }).isRequired
};

export default GuessArtistScreen;
