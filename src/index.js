import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import App from './components/app/app';
import {questions, params} from './mocks/questions';

const init = (gameQuestions, gameParams) => {

  ReactDOM.render(<Provider store={store}>
    <App
      questions={gameQuestions}
      maxMistakes={gameParams.maxMistakes}
    />
  </Provider>,
  document.getElementById(`root`)
  );
};

init(questions, params);
