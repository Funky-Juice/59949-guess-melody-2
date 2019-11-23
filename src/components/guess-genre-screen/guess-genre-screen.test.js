import renderer from 'react-test-renderer';
import GuessGenreScreen from './guess-genre-screen';

const mockQuestion = {
  type: `genre`,
  genre: `electronic`,
  answers: [
    {
      id: 1,
      src: `https://upload.wikimedia.org/wikipedia/commons/3/34/Metalmania_(ISRC_USUAN1700023).mp3`,
      genre: `reggae`
    },
    {
      id: 2,
      src: `https://upload.wikimedia.org/wikipedia/commons/5/5d/Acid_Trumpet_%28ISRC_USUAN1100339%29.mp3`,
      genre: `alternative`
    },
    {
      id: 3,
      src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Keef_Trouble%2C_Oasis.oga`,
      genre: `country`
    },
    {
      id: 4,
      src: `https://upload.wikimedia.org/wikipedia/commons/c/c2/Synth_pop_with_4_on_the_floor.ogg`,
      genre: `electronic`
    }
  ]
};

it(`GuessGenreScreen correctly renders`, () => {
  const tree = renderer
    .create(<GuessGenreScreen
      question={mockQuestion}
      screenIndex={0}
      onAnswer={() => {}}
      renderPlayer={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
