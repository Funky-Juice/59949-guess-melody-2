import {shallow} from 'enzyme';
import withAudioPlayer from './with-audio-player';

describe(`HOC withAudioPlayer should work correctly`, () => {
  const clickHandler = jest.fn();
  const MockComponent = () => <audio/>;
  const MockComponentWrapped = withAudioPlayer(MockComponent);

  const ref = {
    current: document.createElement(`audio`)
  };

  jest.spyOn(React, `createRef`).mockImplementation(() => ref);

  HTMLMediaElement.prototype.pause = () => {};

  const songSrc1 = `http://song_number_1.mp3/`;
  const songSrc2 = `http://song_number_2.mp3/`;

  const wrapper = shallow(
      <MockComponentWrapped
        id={1}
        audioRef={ref}
        screenIndex={1}
        isPlaying={false}
        src={songSrc1}
        onPlayButtonClick={clickHandler}
      />
  );

  it(`Audio state should be isLoading by default`, () => {
    expect(wrapper.state().isLoading).toBe(true);
  });

  it(`Audio state should be changed to !isLoading on canplaythrough called`, () => {
    expect(wrapper.state().isLoading).toBe(true);

    wrapper.props().audioRef.current.oncanplaythrough();
    expect(wrapper.state().isLoading).toBe(false);
  });

  it(`Should change isPlaying state on play/pause button click`, () => {
    expect(wrapper.state().isLoading).toBe(false);
    expect(wrapper.state().isPlaying).toBe(false);

    wrapper.instance()._onPlayButtonClick();

    expect(clickHandler).toHaveBeenCalledTimes(1);
    expect(wrapper.state().isPlaying).toBe(true);

    wrapper.instance()._onPlayButtonClick();

    expect(clickHandler).toHaveBeenCalledTimes(2);
    expect(wrapper.state().isPlaying).toBe(false);
  });

  it(`Should change audio.src on screenIndex change`, () => {
    expect(wrapper.props().audioRef.current.src).toBe(songSrc1);
    expect(wrapper.props().screenIndex).toBe(1);

    wrapper.setProps({src: songSrc2});
    expect(wrapper.props().audioRef.current.src).toBe(songSrc1);

    wrapper.setProps({screenIndex: 2});
    expect(wrapper.props().audioRef.current.src).toBe(songSrc2);
  });
});
