const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequestError = require('../errors/badRequestError');
const NotFoundError = require('../errors/notFoundError');

// Get full users list
module.exports.getAllUsers = (req, res, next) => {
  User.find({})
    .then((usersData) => {
      if (!usersData) {
        throw new NotFoundError('No users to display');
      }
      return res.status(200).send(usersData);
    })
    .catch(next);
};

// Get user by Id
module.exports.getUserById = (req, res, next) => {
  User.findById(req.user._id)
    .then((chosenUser) => {
      if (!chosenUser) {
        throw new NotFoundError('No user with matching id found');
      }
      return res.status(200).send(chosenUser);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Bad request');
      }
      next(err);
    })
    .catch(next);
};

// Create a new user
module.exports.createUser = (req, res, next) => {
  const { email, password } = req.body;
  bcrypt
    .hash(password, 12)
    // eslint-disable-next-line no-shadow
    .then((password) => User.create({
      email,
      password,
    }))
    .then((user) => {
      if (!user) {
        throw new BadRequestError('Bad request');
      }
      res.status(200).send({ message: 'user created successfully' });
    })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const id = req.user._id;
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    id,
    { name, about },
    { new: true, runValidators: true },
  )
    .then((updatedUser) => {
      if (!updatedUser) {
        throw new NotFoundError('No user with matching id found');
      }
      res
        .status(200)
        .send({ message: `User ${updatedUser} updated successfuly` });
    })
    .catch(next);
};

module.exports.updateAvatar = (req, res, next) => {
  const id = req.user._id;
  const { avatar } = req.body;
  User.findByIdAndUpdate(id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (!user) {
        throw new NotFoundError('User not found');
      }
      res.status(200).send({ message: 'Avatar updated successfuly' });
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        throw new BadRequestError('Bad request');
      }
      const { NODE_ENV, JWT_SECRET } = process.env;
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.status(200).send(token);
    })
    .catch(next);
};
