import renderer from 'react-test-renderer';
import GameTimer from './game-timer';

it(`GameTimer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GameTimer
      time={0}
      onTick={() => {}}
      onTimeEnd={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
