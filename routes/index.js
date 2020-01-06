import express from 'express';
import usersRoutes from './users/usersRoutes';
import profilesRoutes from './profiles/profilesRoutes';

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/profiles', profilesRoutes);

export default router;
