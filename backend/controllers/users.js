const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {
  NOTFOUND_ERROR_CODE,
  INVALIDDATA_ERROR_CODE,
  DEFAULT_ERROR_CODE,
  createNotFoundError,
} = require('../constants/constants');

// Get full users list
module.exports.getAllUsers = (req, res) => {
  User.find({})
    .orFail(createNotFoundError)
    .then((usersData) => res.status(200).send(usersData))
    .catch((err) => {
      if (err.name === 'Not Found') {
        res.status(NOTFOUND_ERROR_CODE).send({ message: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ message: `${err.message}` });
    });
};

// Get user by Id
module.exports.getUserById = (req, res) => {
  User.findById(req.user._id)
    .orFail(createNotFoundError)
    .then((chosenUser) => res.status(200).send(chosenUser))
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(INVALIDDATA_ERROR_CODE).send({ message: `${err.message}` });
        return;
      } if (err.name === 'Not Found') {
        res.status(NOTFOUND_ERROR_CODE).send({ message: `${err.message}` });
      }
      res.status(DEFAULT_ERROR_CODE).send({ message: `${err.message}` });
    });
};

// Create a new user
module.exports.createUser = (req, res) => {
  const { email, password } = req.body;
  bcrypt
    .hash(password, 12)
    // eslint-disable-next-line no-shadow
    .then((password) => User.create({
      email,
      password,
    }))
    .then(() => {
      res.status(200).send({ message: 'user created successfully' });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INVALIDDATA_ERROR_CODE).send({ messege: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ messege: `${err.message}` });
    });
};

module.exports.updateUser = (req, res) => {
  const id = req.user._id;
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    id,
    { name, about },
    { new: true, runValidators: true },
  )
    .orFail(createNotFoundError)
    .then((updatedUser) => {
      res
        .status(200)
        .send({ message: `User ${updatedUser} updated successfuly` });
    })
    .catch((err) => {
      if (err.name === 'Not Found') {
        res.status(NOTFOUND_ERROR_CODE).send({ message: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ message: `${err.message}` });
    });
};

module.exports.updateAvatar = (req, res) => {
  const id = req.user._id;
  console.log(id);
  const { avatar } = req.body;
  User.findByIdAndUpdate(id, { avatar }, { new: true, runValidators: true })
    .orFail(createNotFoundError)
    .then(() => {
      res.status(200).send({ message: 'Avatar updated successfuly' });
    })
    .catch((err) => {
      if (err.name === 'Not Found') {
        res.status(NOTFOUND_ERROR_CODE).send({ message: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ message: `${err.message}` });
    });
};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      const { NODE_ENV, JWT_SECRET } = process.env;
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
        { expiresIn: '7d' },
      );
      res.status(200).send(token);
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};
