import express from 'express';

import { signup, login, updatePassword } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/updatePassword', updatePassword);

export default router;