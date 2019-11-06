import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {articles: state.articles};
};

const ConnectedWelcomeScreen = (props) => {
  const {articles, time, errors, onStartBtnClick} = props;

  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
    </div>

    <ul>
      {articles.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>

    <button className="welcome__button" onClick={onStartBtnClick}>
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {time} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {errors} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

const WelcomeScreen = connect(mapStateToProps)(ConnectedWelcomeScreen);

ConnectedWelcomeScreen.propTypes = {
  time: PropTypes.number.isRequired,
  errors: PropTypes.number.isRequired,
  onStartBtnClick: PropTypes.func.isRequired
};

export default WelcomeScreen;
