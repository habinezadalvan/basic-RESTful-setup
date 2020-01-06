import express from 'express';
import validation from '../../middlewares/validationMiddleware';
import userSchema from '../../helpers/schemas/userSchema';
import signupCtrl from '../../controllers/users/signup';

const router = express.Router();

router.post('/', [validation(userSchema)], signupCtrl.signup);

export default router;
