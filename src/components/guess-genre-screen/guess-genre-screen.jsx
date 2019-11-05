import {PureComponent, createRef} from 'react';
import AudioPlayer from '../audio-player/audio-player';

class GuessGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1
    };

    this._form = createRef();
  }

  getInputsValues() {
    const checkboxArray = Array.prototype.slice.call(this._form.current);
    const checkedCheckboxes = checkboxArray.filter((input) => input.checked);
    const checkedCheckboxesValues = checkedCheckboxes.map((input) => input.value);
    return checkedCheckboxesValues;
  }

  render() {
    const {time, errors, question, onAnswer, screenIndex} = this.props;

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

          <form
            className="game__tracks"
            ref={this._form}
            onSubmit={(evt) => {
              evt.preventDefault();
              onAnswer(this.getInputsValues());
            }}>
            {question.answers.map((answer, i) =>
              <div className="track" key={`${screenIndex}-answer-${answer.id}`}>
                <AudioPlayer
                  src={answer.src}
                  isPlaying={i === this.state.activePlayer}
                  onPlayButtonClick={() => this.setState({
                    activePlayer: this.state.activePlayer === i ? -1 : i
                  })}
                />

                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={answer.genre}
                    id={`answer-${answer.id}`}
                  ></input>
                  <label className="game__check" htmlFor={`answer-${answer.id}`}>Отметить</label>
                </div>
              </div>
            )}

            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    </article>;
  }
}

GuessGenreScreen.propTypes = {
  time: PropTypes.number.isRequired,
  errors: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`]).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `pop`, `electronic`]).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `pop`, `electronic`]).isRequired
    }))
  }).isRequired
};

export default GuessGenreScreen;
