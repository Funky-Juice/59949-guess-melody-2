import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessArtistScreen from './guess-artist-screen';

Enzyme.configure({adapter: new Adapter()});

const mockQuestion = {
  type: `artist`,
  song: {
    artist: `Ozzy Osbourne`,
    src: `https://dl1.ru-music.xn--41a.ws/mp3/1369.mp3`
  },
  answers: [
    {
      id: 1,
      picture: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Till_Lindemann_-_2017287140953_2017-10-14_Buchmesse.jpg/800px-Till_Lindemann_-_2017287140953_2017-10-14_Buchmesse.jpg`,
      artist: `Till Lindemann`
    },
    {
      id: 2,
      picture: `https://upload.wikimedia.org/wikipedia/commons/f/fd/JamesHetfield2012.jpg`,
      artist: `James Hetfield`
    },
    {
      id: 3,
      picture: `https://upload.wikimedia.org/wikipedia/commons/7/7b/Ozzy_on_tour_in_Japan.jpg`,
      artist: `Ozzy Osbourne`
    }
  ]
};


it(`GuessArtistScreen onAnswer returns correct data`, () => {
  const answerCB = jest.fn();
  const wrapper = shallow(<GuessArtistScreen
    question={mockQuestion}
    time={0}
    errors={0}
    screenIndex={0}
    onAnswer={answerCB}
  />);

  const radioInput = wrapper.find(`input.artist__input`).first();

  radioInput.simulate(`change`, {
    target: {
      value: `Till Lindemann`,
    },
  });

  expect(answerCB).toHaveBeenCalledTimes(1);
  expect(answerCB.mock.calls[0][0]).toEqual(mockQuestion.answers[0].artist);
});
