import * as usersRepository from './users.repository.js';

async function getByUsername({ username }) {
  const user = await usersRepository.getByUsername({ username });
  return user;
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getByUsername,
};
