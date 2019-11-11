import * as types from './action-types';
import {params} from '../mocks/questions';

const initialState = {
  time: params.gameTime * 60,
  level: -1,
  mistakes: 0
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

    case types.RESET: return Object.assign({}, initialState);
  }

  return state;
};

export default reducer;
