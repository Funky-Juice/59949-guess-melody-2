import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';

const ref = {
  current: document.createElement(`audio`)
};

it(`AudioPlayer correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<AudioPlayer
      audioRef={ref}
      isLoading={true}
      isPlaying={false}
      onPlayButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
