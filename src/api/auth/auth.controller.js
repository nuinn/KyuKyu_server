import * as authService from './auth.service.js';
import * as usersService from '../users/users.service.js';

function isValidEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const emailRegex = /^(?=.{1,254}$)(?=.{1,64}@.{1,255}$)[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?!-)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
  // regex validates emails according to RFC 5321 conforming to Google's standards for nodemailer
  return emailRegex.test(email);
}

async function register(req, res) {
  const { email, password, repeatedPassword } = req.body;
  if (!isValidEmail(email)) {
    res.status(400);
    return res.json({ msg: 'Please enter a valid email address.' });
  }
  if (password !== repeatedPassword) {
    res.status(400);
    return res.json({ msg: 'Both passwords must match.' });
  }
  const userExists = await usersService.getByUsername({ username: email });
  if (userExists) {
    res.status(400);
    return res.json({ msg: 'This email address is already associated with another account.' });
  }
  const createdUser = await authService.register({ newUser: req.body });
  return res.json(createdUser);
}

export {
  // eslint-disable-next-line import/prefer-default-export
  register,
};
