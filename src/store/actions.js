import * as types from './action-types';

const ActionCreator = {
  resetGame: () => ({
    type: types.RESET
  }),

  incrementLevel: () => ({
    type: types.INCREMENT_LEVEL,
    payload: 1
  }),
};

export default ActionCreator;
