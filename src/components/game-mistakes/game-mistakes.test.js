import renderer from 'react-test-renderer';
import GameMistakes from './game-mistakes';

it(`GameMistakes correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<GameMistakes mistakes={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
