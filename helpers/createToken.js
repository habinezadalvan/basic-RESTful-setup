import jwt from 'jsonwebtoken';
import config from 'config';

const secretKey = config.get('secretKey');

const createTokenFunc = (payload) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: 360000 });
  return token;
};

export default createTokenFunc;
