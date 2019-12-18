import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ActionCreator from './store/actions';
import store from './store/store';
import {gameParams} from './gameParams';
import App from './components/app';

const init = (params) => {
  store.dispatch(ActionCreator.getQuestions());

  ReactDOM.render(<Provider store={store}>
    <App maxMistakes={params.MAX_MISTAKES}/>
  </Provider>,
  document.getElementById(`root`)
  );
};

init(gameParams);

// module9-task1
