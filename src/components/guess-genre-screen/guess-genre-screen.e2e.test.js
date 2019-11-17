import {mount} from 'enzyme';
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


it(`GuessGenreScreen onAnswer returns correct data`, () => {
  const answerCB = jest.fn();

  const wrapper = mount(<GuessGenreScreen
    question={mockQuestion}
    screenIndex={0}
    onAnswer={answerCB}
    renderPlayer={() => {}}
  />);

  const form = wrapper.find(`form.game__tracks`);

  form.simulate(`submit`, {
    preventDefault: () => {}
  });

  expect(answerCB).toHaveBeenCalledTimes(1);
  expect(answerCB.mock.calls[0][0]).toEqual(expect.any(Array));
});
