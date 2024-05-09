import userModel from './users.model.js';

async function register({ newUser }) {
  const createdUser = await userModel.create(newUser);
  return createdUser;
}

async function getByUsername({ username }) {
  const user = await userModel.findOne({ username }).lean();
  return user;
}

export {
  register,
  getByUsername,
};
