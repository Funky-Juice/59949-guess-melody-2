import renderer from 'react-test-renderer';
import GameHeader from './game-header';

it(`GameHeader correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GameHeader
      time={0}
      mistakes={0}
      maxMistakes={0}
      onTick={() => {}}
      onTimeEnd={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
