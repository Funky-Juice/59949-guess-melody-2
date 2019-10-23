import ReactDOM from 'react-dom';
import App from './components/app/app';
import {questions, params} from './mocks/questions';

const init = (gameQuestions, gameParams) => {
  const settings = {
    gameStart: () => {
      return `start game!`;
    }
  };

  ReactDOM.render(
      <App
        questions={gameQuestions}
        gameTime={gameParams.gameTime}
        errorCount={gameParams.errorCount}
        gameStart={settings.gameStart}
      />,
      document.getElementById(`root`)
  );
};

init(questions, params);
