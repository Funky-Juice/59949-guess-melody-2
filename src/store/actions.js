import * as types from './action-types';
import {isArtistAnswerCorrect, isGenreAnswerCorrect} from './helpers';

const ActionCreator = {
  resetGame: () => ({
    type: types.RESET
  }),

  incrementLevel: () => ({
    type: types.INCREMENT_LEVEL,
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
};

export default ActionCreator;
