import { Router } from 'express';
import Controller from './user.controller';

const router = Router();

router.get('/users', Controller.findAll());

export default router;
