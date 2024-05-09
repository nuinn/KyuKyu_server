import Router from 'express';
import * as usersController from './users.controller.js';

const router = Router();

router.get('/username/:username', usersController.getByUsername);

export default router;
