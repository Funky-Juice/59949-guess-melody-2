import * as types from './action-types';

const ActionCreator = {
  incrementLevel: () => ({
    type: types.INCREMENT_LEVEL,
    payload: 1
  }),
};

export default ActionCreator;
