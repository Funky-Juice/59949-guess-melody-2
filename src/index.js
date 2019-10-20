import ReactDOM from 'react-dom';
import App from './components/app/app';

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
    gameStart: () => {
      return `start game!`;
    }
  };

  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
        gameStart={settings.gameStart}
      />,
      document.getElementById(`root`)
  );
};

App.defaultProps = {
  gameTime: 10,
  errorCount: 10
};

init();
