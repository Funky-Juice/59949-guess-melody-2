import * as types from './action-types';

const initialState = {
  step: -1,
  mistakes: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_STEP: return Object.assign({}, state, {
      step: state.step + action.payload
    });

    case types.INCREMENT_MISTAKES: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload
    });

    case types.RESET: return Object.assign({}, initialState);
  }

  return state;
};

export default reducer;
