import User from '../../models/User';

class Users {
  static async getSingleUser(req, res) {
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (user) {
        return res.status(200).json({
          status: 200,
          user,
          message: 'the user has been retrieved',
        });
      }
      return res.status(404).json({
        status: 404,
        message: 'That user does not exist',
      });
    } catch (err) {
      return res.status(500).json({
        status: 500,
        message: 'server error',
      });
    }
  }
}

export default Users;
