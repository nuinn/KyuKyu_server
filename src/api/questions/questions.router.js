import Router from 'express';
import * as questionsController from './questions.controller.js';

const router = Router();

router.post('/create/:quizId', questionsController.post);

export default router;
