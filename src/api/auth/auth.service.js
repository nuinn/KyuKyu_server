import * as usersRepository from '../users/users.repository.js';

async function register({ newUser }) {
  const createdUser = await usersRepository.register({ newUser });
  return createdUser;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  register,
};
