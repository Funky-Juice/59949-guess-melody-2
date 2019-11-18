class GuessArtistScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._audioPlayerID = 0;
    this._answerChangeHandler = this._answerChangeHandler.bind(this);
  }

  _answerChangeHandler(evt) {
    const {onAnswer} = this.props;
    const artist = evt.target.value;
    onAnswer(artist);
  }

  render() {
    const {question, screenIndex, renderPlayer} = this.props;

    return <>
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(question.song, this._audioPlayerID)}
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
                onChange={this._answerChangeHandler}
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
  renderPlayer: PropTypes.func.isRequired,
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
