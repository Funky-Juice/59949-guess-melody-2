import * as types from './action-types';

const initialState = {
  level: -1,
  mistakes: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_LEVEL: return Object.assign({}, state, {
      level: state.level + action.payload
    });
  }

  return state;
};

export default reducer;
