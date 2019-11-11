import {shallow} from 'enzyme';
import WelcomeScreen from './welcome-screen.jsx';


it(`WelcomeScreen start button click handler`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    time={0}
    maxMistakes={0}
    onStartBtnClick={clickHandler}
  />);

  const startButton = welcomeScreen.find(`button.welcome__button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
