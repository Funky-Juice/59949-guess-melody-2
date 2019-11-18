import {createStore} from 'redux';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import GameScreen from './game-screen';

const store = createStore(() => ({
  time: 0
}));

it(`GameScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <GameScreen
        question={{}}
        maxMistakes={0}
        mistakes={0}
        level={0}
        onUserAnswer={() => {}}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
