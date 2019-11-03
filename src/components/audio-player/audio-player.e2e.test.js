import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

HTMLMediaElement.prototype.pause = () => {};

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {createRef() {}};
  }
  return null;
}

it(`AudioPlayer play button start/pause track on click`, () => {
  const options = {createNodeMock};
  const clickHandler = jest.fn();

  const wrapper = mount(<AudioPlayer
    src={``}
    isPlaying={false}
    onPlayButtonClick={clickHandler}
  />, options);

  const playButton = wrapper.find(`button.track__button`);

  wrapper.setState({
    isLoading: false
  });

  expect(wrapper.state().isPlaying).toBe(false);

  playButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(wrapper.state().isPlaying).toBe(true);

  playButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(2);
  expect(wrapper.state().isPlaying).toBe(false);
});
