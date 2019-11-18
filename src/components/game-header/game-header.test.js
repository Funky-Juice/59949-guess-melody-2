import {createStore} from 'redux';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import GameHeader from './game-header';

const store = createStore(() => ({
  time: 0
}));

it(`GameHeader correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Provider store={store}>
      <GameHeader
        mistakes={0}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
