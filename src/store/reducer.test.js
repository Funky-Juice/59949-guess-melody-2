import * as types from './action-types';
import reducer from './reducer';
import ActionCreator, {
  isArtistAnswerCorrect,
  isGenreAnswerCorrect
} from './actions';


describe(`Business logic is correct`, () => {

  it(`Artist answer is checked correctly`, () => {
    expect(isArtistAnswerCorrect([], {
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

  it(`Genre answer is checked correctly`, () => {
    expect(isGenreAnswerCorrect([false, false, true, false], {
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

    expect(isGenreAnswerCorrect([false, false, false, false], {
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

  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: types.INCREMENT_STEP,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload for type "Artist"`, () => {
    expect(ActionCreator.incrementMistake({
      artist: `correct`,
      picture: ``
    }, {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          id: 1,
          picture: ``,
          artist: `incorrect`
        },
        {
          id: 2,
          picture: ``,
          artist: `incorrect2`
        },
        {
          id: 3,
          picture: ``,
          artist: `correct`
        }
      ]
    }, 0, Infinity)).toEqual({
      type: types.INCREMENT_MISTAKES,
      payload: 0
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload for type "Artist"`, () => {
    expect(ActionCreator.incrementMistake({
      artist: `incorrect`,
      picture: ``
    }, {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          id: 1,
          picture: ``,
          artist: `incorrect`
        },
        {
          id: 2,
          picture: ``,
          artist: `incorrect2`
        },
        {
          id: 3,
          picture: ``,
          artist: `correct`
        }
      ]
    }, 0, Infinity)).toEqual({
      type: types.INCREMENT_MISTAKES,
      payload: 1
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload for type "Genre"`, () => {
    expect(ActionCreator.incrementMistake([false, false, false, false], {
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
    expect(ActionCreator.incrementMistake([false, false, false, false], {
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

  it(`Action creator resets state if user is answered incorrect`, () => {
    expect(ActionCreator.incrementMistake({
      artist: `incorrect`,
      picture: ``
    }, {
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``
      },
      answers: [
        {
          id: 1,
          picture: ``,
          artist: `incorrect`
        },
        {
          id: 2,
          picture: ``,
          artist: `incorrect2`
        },
        {
          id: 3,
          picture: ``,
          artist: `correct`
        }
      ]
    }, Infinity, 0)).toEqual({
      type: types.RESET
    });

    expect(ActionCreator.incrementMistake([true, true, true, true], {
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
      step: -1,
      mistakes: 0
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0
    }, {
      type: types.INCREMENT_STEP,
      payload: 0
    })).toEqual({
      step: -1,
      mistakes: 0
    });

    expect(reducer({
      step: -1,
      mistakes: 0
    }, {
      type: types.INCREMENT_STEP,
      payload: 1
    })).toEqual({
      step: 0,
      mistakes: 0
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0
    }, {
      type: types.INCREMENT_MISTAKES,
      payload: 0
    })).toEqual({
      step: -1,
      mistakes: 0
    });

    expect(reducer({
      step: -1,
      mistakes: 0
    }, {
      type: types.INCREMENT_MISTAKES,
      payload: 1
    })).toEqual({
      step: -1,
      mistakes: 1
    });
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      step: 3,
      mistakes: 2
    }, {
      type: types.RESET
    })).toEqual({
      step: -1,
      mistakes: 0
    });

    expect(reducer({
      step: 3,
      mistakes: 2
    }, {
      type: types.RESET,
      payload: 1
    })).toEqual({
      step: -1,
      mistakes: 0
    });
  });
});
