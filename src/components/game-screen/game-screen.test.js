import renderer from 'react-test-renderer';
import GameScreen from './game-screen';

it(`GameScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GameScreen
      time={0}
      question={{}}
      maxMistakes={0}
      mistakes={0}
      level={0}
      onTick={() => {}}
      onTimeEnd={() => {}}
      onUserAnswer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
