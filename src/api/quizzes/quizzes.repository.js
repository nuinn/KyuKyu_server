import quizModel from './quizzes.model.js';

async function create({ creatorId, category }) {
  const newQuiz = await quizModel.create({ creatorId, category });
  return newQuiz;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  create,
};
