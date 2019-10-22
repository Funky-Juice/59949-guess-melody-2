import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const {gameTime, errorCount, gameStart} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    start={gameStart}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  gameStart: PropTypes.func.isRequired
};

export default App;
