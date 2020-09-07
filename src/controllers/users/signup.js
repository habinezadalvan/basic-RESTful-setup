/* eslint-disable import/no-named-as-default-member */
import models from '../../models';
import hashPassword from '../../helpers/hash';
import createToken from '../../helpers/createToken';
import cloudinaryHelper from '../../helpers/do';


class UserSignup {
  static async signup(req, res) {
    try {
      const {
        firstname, lastname, email, username, password,
      } = req.body;
      const findUserByUsername = await models.User.findOne({
        where: { username: username.toLowerCase() },
        raw: true,
      });
      const findUserByEmail = await models.User.findOne({
        where: { email: email.toLowerCase() },
        raw: true,
      });

      if (findUserByUsername || findUserByEmail) {
        return res.status(400).json({
          errors: [
            {
              msg: `The user with the ${
                findUserByUsername ? `username: ${username}` : `email: ${email}`
              } is already in use`,
            },
          ],
        });
      }

      const images = await cloudinaryHelper.generateCloudinaryUrl(req.files);
      const hash = await hashPassword(password);

      const user = await models.User.create({
        firstname,
        lastname,
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password: hash,
        avatar: images[0],
      });

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
          avatar: user.avatar,
        },
        token: createdtoken,
      });
    } catch (err) {
      console.log('err ====', err.message);
      return res.status(500).json({ errors: [{ msg: 'server error' }] });
    }
  }
}

export default UserSignup;
