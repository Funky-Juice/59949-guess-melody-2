import PropTypes from 'prop-types';

const GuessGenreScreen = (props) => {
  const {time, errors, question, onAnswer} = props;

  return <article id="game-genre">
    <section className="game game--genre">
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
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault(); onAnswer();
        }}>
          {question.answers.map((answer, i) =>
            <div className="track" key={i}>
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio controls src={answer.src}></audio>
              </div>
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value={answer.genre}
                  id={`answer-` + i}></input>
                <label className="game__check" htmlFor={`answer-` + i}>Отметить</label>
              </div>
            </div>
          )}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  </article>;
};

GuessGenreScreen.propTypes = {
  time: PropTypes.number.isRequired,
  errors: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default GuessGenreScreen;