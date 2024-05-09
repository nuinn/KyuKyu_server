import Router from 'express';
import authRouter from './auth/auth.router.js';
import questionsRouter from './questions/questions.router.js';
import quizzesRouter from './quizzes/quizzes.router.js';
import usersRouter from './users/users.router.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/questions', questionsRouter);
router.use('/quizzes', quizzesRouter);
router.use('/users', usersRouter);

export default router;
