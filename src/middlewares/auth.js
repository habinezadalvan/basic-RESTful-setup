/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jsonwebtoken';
import 'dotenv/config';


const auth = (req, res, next) => {
  const token = req.header('x-access-token' || 'Authorization');
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'unauthorized',
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.secretKey);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      message: 'unauthorized, token is not valid',
    });
  }
};

export default auth;
