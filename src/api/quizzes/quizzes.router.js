import Router from 'express';
import * as quizzesController from './quizzes.controller.js';

const router = Router();

router.post('/create', quizzesController.create);

export default router;
