export const questions = [
  {
    type: `genre`,
    genre: `jazz`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/3/34/Metalmania_(ISRC_USUAN1700023).mp3`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/5/5d/Acid_Trumpet_%28ISRC_USUAN1100339%29.mp3`,
        genre: `jazz`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/d/db/Keef_Trouble%2C_Oasis.oga`,
        genre: `pop`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/c/c2/Synth_pop_with_4_on_the_floor.ogg`,
        genre: `electronic`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Ozzy Osbourne`,
      song: `http://rock-nation.ru/upload/mp3/Black%20Sabbath/1970%20-%20Paranoid/02.%20Paranoid.mp3`
    },
    answer: [
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
  }
];

export const params = {
  gameTime: 5,
  errorCount: 3,
};
