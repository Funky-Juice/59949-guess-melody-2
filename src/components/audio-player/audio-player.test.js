import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {createRef() {}};
  }
  return null;
}

it(`AudioPlayer correctly renders after relaunch`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<AudioPlayer
      src={``}
      isPlaying={false}
      onPlayButtonClick={() => {}}
    />, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
