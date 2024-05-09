import questionModel from './questions.model.js';

async function post({ question }) {
  const postedQuestion = await questionModel.create({ question });
  return postedQuestion;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  post,
};
