import * as usersService from './users.service.js';

async function getByUsername(req, res) {
  const { username } = req.params;
  const user = await usersService.getByUsername({ username });
  if (!user) {
    res.status(404);
    return res.json({ error: 'No such user exists.' });
  }
  return res.json({ user });
}

export {
  // eslint-disable-next-line import/prefer-default-export
  getByUsername,
};
