import ReactDOM from 'react-dom';
import App from './components/app/app';

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };

  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
      />,
      document.getElementById(`root`)
  );
};

init();
