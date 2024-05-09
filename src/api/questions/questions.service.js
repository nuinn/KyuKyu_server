import * as questionsRepository from './questions.repository.js';

async function post({ question }) {
  return questionsRepository.post({ question });
}

export {
  // eslint-disable-next-line import/prefer-default-export
  post,
};
