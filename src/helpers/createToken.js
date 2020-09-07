/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const createTokenFunc = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 360000 });
  return token;
};

export default createTokenFunc;
