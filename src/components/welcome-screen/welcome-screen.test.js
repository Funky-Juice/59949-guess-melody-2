import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      maxMistakes={0}
      onStartBtnClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
