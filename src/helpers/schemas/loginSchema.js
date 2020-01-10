import { check } from 'express-validator';

const loginSchema = [

  check('username', 'username is require').rtrim(),
  check('email', 'Please include valid email').rtrim(),
  check('password', 'password is require'),
];

export default loginSchema;
