import * as types from './action-types';
import reducer from './reducer';


describe(`Reducer works correctly`, () => {

  it(`Reducer without additional params should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    });
  });

  it(`Reducer should increment current level by a given value`, () => {
    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    }, {
      type: types.INCREMENT_LEVEL,
      payload: 0
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    });

    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    }, {
      type: types.INCREMENT_LEVEL,
      payload: 1
    })).toEqual({
      level: 0,
      mistakes: 0,
      time: 300,
      questions: []
    });
  });

  it(`Reducer should increment number of mistakes by a given value`, () => {
    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    }, {
      type: types.INCREMENT_MISTAKES,
      payload: 0
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    });

    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    }, {
      type: types.INCREMENT_MISTAKES,
      payload: 1
    })).toEqual({
      level: -1,
      mistakes: 1,
      time: 300,
      questions: []
    });
  });

  it(`Reducer should decrement time by a given value`, () => {
    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    }, {
      type: types.REDUCE_TIME,
      payload: 0
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    });

    expect(reducer({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    }, {
      type: types.REDUCE_TIME,
      payload: 1
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 299,
      questions: []
    });
  });

  it(`Reducer should correctly reset application state`, () => {
    expect(reducer({
      level: 3,
      mistakes: 2,
      time: 22,
      questions: null
    }, {
      type: types.RESET
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    });

    expect(reducer({
      level: 3,
      mistakes: 2,
      time: 22,
      questions: null
    }, {
      type: types.RESET,
      payload: 1
    })).toEqual({
      level: -1,
      mistakes: 0,
      time: 300,
      questions: []
    });
  });
});
