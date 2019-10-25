import renderer from 'react-test-renderer';
import GuessArtistScreen from './guess-artist-screen';

const mockQuestion = {
  type: `artist`,
  song: {
    artist: `Ozzy Osbourne`,
    src: `https://dl1.ru-music.xn--41a.ws/mp3/1369.mp3`
  },
  answers: [
    {
      picture: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Till_Lindemann_-_2017287140953_2017-10-14_Buchmesse.jpg/800px-Till_Lindemann_-_2017287140953_2017-10-14_Buchmesse.jpg`,
      artist: `Till Lindemann`
    },
    {
      picture: `https://upload.wikimedia.org/wikipedia/commons/f/fd/JamesHetfield2012.jpg`,
      artist: `James Hetfield`
    },
    {
      picture: `https://upload.wikimedia.org/wikipedia/commons/7/7b/Ozzy_on_tour_in_Japan.jpg`,
      artist: `Ozzy Osbourne`
    }
  ]
};


it(`GuessArtistScreen correctly renders`, () => {
  const tree = renderer
    .create(<GuessArtistScreen question={mockQuestion} time={0} errors={0} screenIndex={0} onAnswer={() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
