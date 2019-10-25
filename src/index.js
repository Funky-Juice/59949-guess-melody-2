import ReactDOM from 'react-dom';
import App from './components/app/app';
import {questions, params} from './mocks/questions';

const init = (gameQuestions, gameParams) => {

  ReactDOM.render(
      <App
        questions={gameQuestions}
        gameTime={gameParams.gameTime}
        errorCount={gameParams.errorCount}
      />,
      document.getElementById(`root`)
  );
};

init(questions, params);
