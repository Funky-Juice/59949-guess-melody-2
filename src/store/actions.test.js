import * as types from './action-types';
import ActionCreator from './actions';


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
