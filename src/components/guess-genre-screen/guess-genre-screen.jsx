import {createRef} from 'react';
import AudioPlayer from '../audio-player/audio-player';

class GuessGenreScreen extends React.PureComponent {
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
    const {question, onAnswer, screenIndex} = this.props;

    return <>
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
    </>;
  }
}

GuessGenreScreen.propTypes = {
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
