class GuessArtistScreen extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {question, onAnswer, screenIndex, renderPlayer} = this.props;

    return <>
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(question.song, 0)}
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
