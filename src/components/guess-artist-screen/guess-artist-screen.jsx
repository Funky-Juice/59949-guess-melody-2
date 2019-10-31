import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player';

const GuessArtistScreen = (props) => {
  const {time, errors, question, onAnswer, screenIndex} = props;

  return <article id="game-artist">
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"></img>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">{time}</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          {[...Array(errors)].map((error, i) =>
            <div key={i} className="wrong"></div>
          )}
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer src={question.song.src}/>
          </div>
        </div>

        <form className="game__artist">
          {question.answers.map((answer, i) =>
            <div className="artist" key={`${screenIndex}-answer-${i}`}>
              <input className="artist__input visually-hidden" onChange={(evt) => {
                onAnswer(evt.target.value);
              }} type="radio" name="answer" value={answer.artist} id={`answer-` + i}></input>
              <label className="artist__name" htmlFor={`answer-` + i}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}></img>
                {answer.artist}
              </label>
            </div>
          )}
        </form>
      </section>
    </section>
  </article>;
};

GuessArtistScreen.propTypes = {
  time: PropTypes.number.isRequired,
  errors: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired
};

export default GuessArtistScreen;
