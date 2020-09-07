import { Router } from 'express';
import usersRoutes from './users/usersRoutes';
import profilesRoutes from '../profiles/profilesRoutes';
import productRoutes from './products';

const router = Router();

router.use('/users', usersRoutes);
router.use('/profiles', profilesRoutes);
router.use('/products', productRoutes);

export default router;
