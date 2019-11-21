
export const isArtistAnswerCorrect = (userAnswer, question) => {
  return userAnswer === question.song.artist;
};

export const isGenreAnswerCorrect = (userAnswer, question) => {
  const correctAnswers = question.answers.map((it) => {
    if (it.genre === question.genre) {
      return it.genre;
    }
    return null;
  }).filter(Boolean);

  userAnswer.sort();
  correctAnswers.sort();

  return JSON.stringify(correctAnswers) === JSON.stringify(userAnswer);
};

export const addFieldsToData = (data) => {
  data.forEach((obj) => {
    obj.answers.forEach((it, i) => (it.id = i));
  });

  return data;
};
