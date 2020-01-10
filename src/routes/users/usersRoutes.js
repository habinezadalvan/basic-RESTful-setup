import { Router } from 'express';
import validation from '../../middlewares/validationMiddleware';
import userSchema from '../../helpers/schemas/userSchema';
import signupCtrl from '../../controllers/users/signup';
import auth from '../../middlewares/auth';
import users from '../../controllers/users/users';
import loginSchema from '../../helpers/schemas/loginSchema';
import userLogin from '../../controllers/users/login';

const router = Router();

router.post('/register', [validation(userSchema)], signupCtrl.signup);
router.post('/signin', [validation(loginSchema)], userLogin.login);
router.get('/user', [auth], users.getSingleUser);

export default router;
