import {createStore} from 'redux';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import App from './app';

const store = createStore(() => ({
  time: 0
}));

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <App
        level={-1}
        questions={[{}]}
        mistakes={0}
        maxMistakes={0}
        onGameEnd={() => {}}
        onUserAnswer={() => {}}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
