const GameMistakes = (props) => {
  const {errors} = props;

  return <div className="game__mistakes">
    {[...Array(errors)].map((error, i) =>
      <div key={i} className="wrong"></div>
    )}
  </div>;
};

GameMistakes.propTypes = {
  errors: PropTypes.number.isRequired
};

export default GameMistakes;
