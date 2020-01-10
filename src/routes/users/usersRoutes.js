import { Router } from 'express';
import validation from '../../middlewares/validationMiddleware';
import userSchema from '../../helpers/schemas/userSchema';
import signupCtrl from '../../controllers/users/signup';

const router = Router();

router.post('/register', [validation(userSchema)], signupCtrl.signup);

export default router;
