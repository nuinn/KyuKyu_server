import * as questionsService from './questions.service.js';

async function post(req, res) {
  const { quizId } = req.params;
  const { body } = req;
  const newQuestion = { quizId, ...body };
  console.log(newQuestion);
  if (!Object.keys(body).length) {
    return res.json({ error: 'No question posted' });
  }
  // if model doesn't reject empty questions/answers, will need a line of code here
  const postedQuestion = await questionsService.post({ question: body });
  return res.json(postedQuestion);
}

export {
  // eslint-disable-next-line import/prefer-default-export
  post,
};
