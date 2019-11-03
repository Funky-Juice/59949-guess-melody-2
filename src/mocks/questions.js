export const questions = [
  {
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
  },
  {
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
  }
];

export const params = {
  gameTime: 5,
  errorCount: 3,
};
