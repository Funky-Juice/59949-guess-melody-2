import {shallow} from 'enzyme';
import withAudioPlayer from './with-audio-player';

const clickHandler = jest.fn();
const MockComponent = () => <audio/>;
const MockComponentWrapped = withAudioPlayer(MockComponent);

const ref = {
  current: document.createElement(`audio`)
};

jest.spyOn(React, `createRef`).mockImplementation(() => ref);

HTMLMediaElement.prototype.pause = () => {};

const wrapper = shallow(
    <MockComponentWrapped
      id={1}
      isPlaying={false}
      src={`question.song.src`}
      onPlayButtonClick={clickHandler}
    />
);

it(`HOC withAudioPlayer should work correctly`, () => {
  expect(wrapper.state().isLoading).toBe(true);
  expect(wrapper.state().isPlaying).toBe(false);

  wrapper.setState({isLoading: false});

  expect(wrapper.state().isLoading).toBe(false);
  expect(wrapper.state().isPlaying).toBe(false);

  wrapper.instance()._onPlayButtonClick();

  expect(clickHandler).toHaveBeenCalledTimes(1);
  expect(wrapper.state().isPlaying).toBe(true);

  wrapper.instance()._onPlayButtonClick();

  expect(clickHandler).toHaveBeenCalledTimes(2);
  expect(wrapper.state().isPlaying).toBe(false);
});
