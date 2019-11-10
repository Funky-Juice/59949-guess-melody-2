import * as types from './action-types';
import reducer from './reducer';
import ActionCreator from './actions';
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


describe(`Action creators work correctly`, () => {

  it(`Action creator for incrementing level returns correct action`, () => {
    expect(ActionCreator.incrementLevel()).toEqual({
      type: types.INCREMENT_LEVEL,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload for type "Artist"`, () => {
    expect(ActionCreator.incrementMistakes(`Ozzy Osbourne`, {
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
    }, 0, Infinity)).toEqual({
      type: types.INCREMENT_MISTAKES,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload for type "Artist"`, () => {
    expect(ActionCreator.incrementMistakes(`Till Lindemann`, {
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
    }, 0, Infinity)).toEqual({
      type: types.INCREMENT_MISTAKES,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload for type "Genre"`, () => {
    expect(ActionCreator.incrementMistakes([`jazz`], {
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
    }, 0, Infinity)).toEqual({
      type: types.INCREMENT_MISTAKES,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload for type "Genre"`, () => {
    expect(ActionCreator.incrementMistakes([`rock`, `jazz`], {
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
    }, 0, Infinity)).toEqual({
      type: types.INCREMENT_MISTAKES,
      payload: 1
    });
  });

  it(`Action creator resets state if user is answered incorrect (artist type)`, () => {
    expect(ActionCreator.incrementMistakes(`Till Lindemann`, {
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
    }, Infinity, 0)).toEqual({
      type: types.RESET
    });
  });

  it(`Action creator resets state if user is answered incorrect (genre type)`, () => {
    expect(ActionCreator.incrementMistakes([`rock`, `jazz`], {
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
    }, Infinity, 0)).toEqual({
      type: types.RESET
    });
  });
});


describe(`Reducer works correctly`, () => {

  it(`Reducer without additional params should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      level: -1,
      mistakes: 0,
      time: 300
    });
  });

  it(`Reducer should increment current level by a given value`, () => {
    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300
    }, {
      type: types.INCREMENT_LEVEL,
      payload: 0
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300
    });

    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300
    }, {
      type: types.INCREMENT_LEVEL,
      payload: 1
    })).toEqual({
      level: 0,
      mistakes: 0,
      time: 300
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300
    }, {
      type: types.INCREMENT_MISTAKES,
      payload: 0
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300
    });

    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300
    }, {
      type: types.INCREMENT_MISTAKES,
      payload: 1
    })).toEqual({
      level: -1,
      mistakes: 1,
      time: 300
    });
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      level: 3,
      mistakes: 2,
      time: 22
    }, {
      type: types.RESET
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300
    });

    expect(reducer({
      level: 3,
      mistakes: 2,
      time: 22
    }, {
      type: types.RESET,
      payload: 1
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300
    });
  });
});
