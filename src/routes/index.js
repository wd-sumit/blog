import { Router } from 'express';
import UserRouter from './users';

const router = Router();

router.use('/api/v1', UserRouter);

export default router;
