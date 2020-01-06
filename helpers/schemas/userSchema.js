import { body } from 'express-validator';

const userSchema = [
  body('firstname')
    .isLength({ min: 3 }).withMessage('Firstname must be atleast 3 chars long')
    .rtrim(),
  body('lastname')
    .isLength({ min: 3 }).withMessage('lastname must be atleast 3 chars long')
    .rtrim(),
  body('username').isLength({ min: 3 })
    .withMessage('username has to be at least 3 chars long')
    .rtrim(),
  body('email').isEmail().withMessage('Email should be valid').rtrim(),
  body('password').matches(/\d/).withMessage('Password should contain a number')
    .isLength({ min: 6 })
    .withMessage('Password has to be at least 6 chars long'),
];

export default userSchema;
