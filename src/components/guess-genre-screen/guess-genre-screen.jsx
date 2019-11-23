import {createRef} from 'react';

class GuessGenreScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._form = createRef();
    this._answerSubmitHandler = this._answerSubmitHandler.bind(this);
  }

  _getInputsValues() {
    const checkboxArray = Array.prototype.slice.call(this._form.current);
    const checkedCheckboxes = checkboxArray.filter((input) => input.checked);
    const checkedCheckboxesValues = checkedCheckboxes.map((input) => input.value);
    return checkedCheckboxesValues;
  }

  _answerSubmitHandler(evt) {
    const {onAnswer} = this.props;
    evt.preventDefault();
    onAnswer(this._getInputsValues());
  }

  render() {
    const {question, screenIndex, renderPlayer} = this.props;

    return <>
      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>

        <form
          className="game__tracks"
          ref={this._form}
          onSubmit={this._answerSubmitHandler}
        >
          {question.answers.map((answer, i) => (
            <div className="track" key={`${screenIndex}-answer-${answer.id}`}>
              {renderPlayer(answer, i)}

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
          ))}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </>;
  }
}

GuessGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`]).isRequired,
    genre: PropTypes.oneOf([`reggae`, `electronic`, `country`, `alternative`]).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`reggae`, `electronic`, `country`, `alternative`]).isRequired
    }))
  }).isRequired
};

export default GuessGenreScreen;
