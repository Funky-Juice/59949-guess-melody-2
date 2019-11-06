import * as types from './action-types';

export const isArtistAnswerCorrect = (userAnswer, question) => {
  return userAnswer.artist === question.song.artist;
};

export const isGenreAnswerCorrect = (userAnswer, question) => {
  return userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));
};


const ActionCreator = {
  reset: () => ({
    type: types.RESET
  }),

  incrementStep: () => ({
    type: types.INCREMENT_STEP,
    payload: 1
  }),

  incrementMistake: (userAnswer, question, mistakes, maxMistakes) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    if (!answerIsCorrect && mistakes + 1 >= maxMistakes) {
      return {
        type: types.RESET
      };
    }

    return {
      type: types.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1
    };
  }
};

export default ActionCreator;
