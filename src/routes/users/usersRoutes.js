import { Router } from 'express';
import validation from '../../middlewares/validationMiddleware';
import userSchema from '../../helpers/schemas/userSchema';
import signupCtrl from '../../controllers/users/signup';
// import auth from '../../middlewares/auth';
// import users from '../../controllers/users/products';
import loginSchema from '../../helpers/schemas/loginSchema';
import userLogin from '../../controllers/users/login';

import upload from '../../middlewares/multer';

const router = Router();

router.post('/register', upload.array('avatar', 1), [validation(userSchema)], signupCtrl.signup);
router.post('/signin', [validation(loginSchema)], userLogin.login);
// router.get('/product', [auth], users.getSingleUser);

export default router;
