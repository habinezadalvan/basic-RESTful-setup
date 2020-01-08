import bcrypt from 'bcryptjs';

const hashFunc = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};

export default hashFunc;
