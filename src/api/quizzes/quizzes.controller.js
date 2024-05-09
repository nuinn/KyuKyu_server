import * as quizzesService from './quizzes.service.js';

const user = {
  _id: '65b0eb31a629233325df1797',
};

async function create(req, res) {
  const { category } = req.body;
  if (!category) {
    return res.json({ error: 'No quiz posted' });
  }
  const creatorId = user._id;
  if (!creatorId) {
    return res.json({ error: 'No user found' });
  }
  const newQuiz = await quizzesService.create({ creatorId, category });
  return res.json(newQuiz);
}

export {
  // eslint-disable-next-line import/prefer-default-export
  create,
};
