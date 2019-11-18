import {mount} from 'enzyme';
import AudioPlayer from './audio-player';

const ref = {
  current: document.createElement(`audio`)
};

it(`AudioPlayer play button start/pause track on click`, () => {
  const clickHandler = jest.fn();

  const wrapper = mount(<AudioPlayer
    audioRef={ref}
    isLoading={true}
    isPlaying={false}
    onPlayButtonClick={clickHandler}
  />);

  const playButton = wrapper.find(`button.track__button`);

  wrapper.setProps({isLoading: false});

  playButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
