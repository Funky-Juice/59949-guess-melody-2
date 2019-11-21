import * as types from './action-types';
import {isArtistAnswerCorrect, isGenreAnswerCorrect, addFieldsToData} from './helpers';

const ActionCreator = {
  resetGame: () => ({
    type: types.RESET
  }),

  incrementLevel: () => ({
    type: types.INCREMENT_LEVEL,
    payload: 1
  }),

  reduceTime: () => ({
    type: types.REDUCE_TIME,
    payload: 1
  }),

  incrementMistakes: (userAnswer, question, mistakes, maxMistakes) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    if (!answerIsCorrect && mistakes >= maxMistakes) {
      return ActionCreator.resetGame();
    }

    return {
      type: types.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1
    };
  },

  getQuestions: () => (dispatch, _getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        const modifiedData = addFieldsToData(response.data);
        dispatch(ActionCreator.setQuestions(modifiedData));
      });
  },

  setQuestions: (questions) => {
    return {
      type: types.SET_QUESTIONS,
      payload: questions,
    };
  }
};

export default ActionCreator;
