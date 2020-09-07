import bcrypt from 'bcryptjs';
import models from '../../models';
import createToken from '../../helpers/createToken';

class userLogin {
  static async login(req, res) {
    const { username, email, password } = req.body;
    if (!(username || email)) {
      return res
        .status(400)
        .json({ status: 400, message: 'Email or username is required' });
    }
    try {
      let user;
      if (username) {
        user = await models.User.findOne({ where: { username } });
      }
      if (email) {
        user = await models.User.findOne({ where: { email } });
      }
      if (!user) {
        return res
          .status(400)
          .json({ status: 400, message: 'invalid credentials' });
      }
      const hashedPassword = user && user.password;
      const isMatch = await bcrypt.compareSync(password, hashedPassword);
      if (!isMatch) {
        return res
          .status(400)
          .json({ status: 400, message: 'invalid credentials' });
      }
      const payload = {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      };
      const token = await createToken(payload);
      return res.status(200).json({ token });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: 'server error',
      });
    }
  }
}
export default userLogin;
