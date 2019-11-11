const GameMistakes = (props) => {
  const {mistakes} = props;

  return <div className="game__mistakes">
    {[...Array(mistakes)].map((error, i) =>
      <div key={i} className="wrong"></div>
    )}
  </div>;
};

GameMistakes.propTypes = {
  mistakes: PropTypes.number.isRequired
};

export default GameMistakes;
