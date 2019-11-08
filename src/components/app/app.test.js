import renderer from 'react-test-renderer';
import {App} from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      level={-1}
      questions={[{}]}
      gameTime={0}
      mistakes={0}
      maxMistakes={0}
      onGameEnd={() => {}}
      onGameStart={() => {}}
      onUserAnswer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
