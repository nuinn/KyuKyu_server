import * as quizzesRepository from './quizzes.repository.js';

async function create({ creatorId, category }) {
  return quizzesRepository.create({ creatorId, category });
}

export {
  // eslint-disable-next-line import/prefer-default-export
  create,
};
