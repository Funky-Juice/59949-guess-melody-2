import * as types from './action-types';
import {gameParams} from '../gameParams';

const initialState = {
  time: gameParams.GAME_TIME * 60,
  level: -1,
  mistakes: 0,
  questions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_LEVEL: return Object.assign({}, state, {
      level: state.level + action.payload
    });

    case types.INCREMENT_MISTAKES: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload
    });

    case types.REDUCE_TIME: return Object.assign({}, state, {
      time: state.time - action.payload
    });

    case types.SET_QUESTIONS: return Object.assign({}, state, {
      questions: action.payload
    });

    case types.RESET: return Object.assign({}, initialState);
  }

  return state;
};

export default reducer;
