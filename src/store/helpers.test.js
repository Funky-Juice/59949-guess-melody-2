import {isArtistAnswerCorrect, isGenreAnswerCorrect} from './helpers';


describe(`Business logic is correct`, () => {

  it(`Artist answer is checked correctly`, () => {
    expect(isArtistAnswerCorrect(`Ozzy Osbourne`, {
      type: `artist`,
      song: {
        artist: `Ozzy Osbourne`,
        src: ``
      },
      answers: [
        {
          id: 1,
          picture: ``,
          artist: `Till Lindemann`
        },
        {
          id: 2,
          picture: ``,
          artist: `James Hetfield`
        },
        {
          id: 3,
          picture: ``,
          artist: `Ozzy Osbourne`
        }
      ]
    }
    )).toEqual(true);
  });

  it(`Artist answer is checked incorrectly`, () => {
    expect(isArtistAnswerCorrect(`Till Lindemann`, {
      type: `artist`,
      song: {
        artist: `Ozzy Osbourne`,
        src: ``
      },
      answers: [
        {
          id: 1,
          picture: ``,
          artist: `Till Lindemann`
        },
        {
          id: 2,
          picture: ``,
          artist: `James Hetfield`
        },
        {
          id: 3,
          picture: ``,
          artist: `Ozzy Osbourne`
        }
      ]
    }
    )).toEqual(false);
  });

  it(`Genre answer is checked correctly`, () => {
    expect(isGenreAnswerCorrect([`jazz`], {
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          id: 1,
          src: ``,
          genre: `rock`
        },
        {
          id: 2,
          src: ``,
          genre: `jazz`
        },
        {
          id: 3,
          src: ``,
          genre: `pop`
        },
        {
          id: 4,
          src: ``,
          genre: `electronic`
        }
      ]
    })).toEqual(true);
  });

  it(`Genre answer is checked incorrectly`, () => {
    expect(isGenreAnswerCorrect([`rock`, `jazz`], {
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          id: 1,
          src: ``,
          genre: `rock`
        },
        {
          id: 2,
          src: ``,
          genre: `jazz`
        },
        {
          id: 3,
          src: ``,
          genre: `pop`
        },
        {
          id: 4,
          src: ``,
          genre: `electronic`
        }
      ]
    })).toEqual(false);
  });

  it(`Genre answer is checked incorrectly (empty answer)`, () => {
    expect(isGenreAnswerCorrect([], {
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          id: 1,
          src: ``,
          genre: `rock`
        },
        {
          id: 2,
          src: ``,
          genre: `jazz`
        },
        {
          id: 3,
          src: ``,
          genre: `pop`
        },
        {
          id: 4,
          src: ``,
          genre: `electronic`
        }
      ]
    })).toEqual(false);
  });
});
