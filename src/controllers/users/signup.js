import gravatar from 'gravatar';
import User from '../../models/User';
import hashPassword from '../../helpers/hash';
import createToken from '../../helpers/createToken';


class UserSignup {
  static async signup(req, res) {
    try {
      const {
        firstname, lastname, email, username, password,
      } = req.body;
      const findUserByUsername = await User.findOne({ username: username.toLowerCase() });
      const findUserByEmail = await User.findOne({ email: email.toLowerCase() });

      if (findUserByUsername || findUserByEmail) {
        return res.status(400).json({ errors: [{ msg: `The user with the ${findUserByUsername ? `username: ${username}` : `email: ${email}`} is already in use` }] });
      }
      const avator = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });

      const hash = await hashPassword(password);
      const user = new User({
        firstname,
        lastname,
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password: hash,
        avator,
      });
      await user.save();
      const payload = {
        user: {
          id: user.id,
          username,
        },
      };
      const createdtoken = createToken(payload);
      return res.status(201).json({
        status: 201,
        user: {
          firstname,
          lastname,
          username,
          email,
          avator,
        },
        token: createdtoken,
      });
    } catch (err) {
      return res.status(500).json({ errors: [{ msg: 'server error' }] });
    }
  }
}

export default UserSignup;
