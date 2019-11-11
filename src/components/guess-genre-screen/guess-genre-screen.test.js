import renderer from 'react-test-renderer';
import GuessGenreScreen from './guess-genre-screen';

const mockQuestion = {
  type: `genre`,
  genre: `jazz`,
  answers: [
    {
      id: 1,
      src: `https://upload.wikimedia.org/wikipedia/commons/3/34/Metalmania_(ISRC_USUAN1700023).mp3`,
      genre: `rock`
    },
    {
      id: 2,
      src: `https://upload.wikimedia.org/wikipedia/commons/5/5d/Acid_Trumpet_%28ISRC_USUAN1100339%29.mp3`,
      genre: `jazz`
    },
    {
      id: 3,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Keef_Trouble%2C_Oasis.oga`,
      genre: `pop`
    },
    {
      id: 4,
      src: `https://upload.wikimedia.org/wikipedia/commons/c/c2/Synth_pop_with_4_on_the_floor.ogg`,
      genre: `electronic`
    }
  ]
};

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {createRef() {}};
  }
  return null;
}

it(`GuessGenreScreen correctly renders`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<GuessGenreScreen
      question={mockQuestion}
      time={0}
      maxMistakes={0}
      screenIndex={0}
      onAnswer={() => {}}
    />, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
