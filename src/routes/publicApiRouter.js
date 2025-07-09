import express from 'express';
import { postRegister } from '../api/public/postRegister.js';
import { postLogin } from '../api/public/postLogin.js';

export const publicApiRouter = express.Router();

publicApiRouter.post('/api/register', postRegister);
publicApiRouter.post('/api/login', postLogin);