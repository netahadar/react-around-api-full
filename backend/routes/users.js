const users = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getAllUsers, getUserById, updateUser, updateAvatar,
} = require('../controllers/users');
const { validateUrl } = require('../middlewares/linkValidation');

// Get full users list
users.get('/users', getAllUsers);

// Get user's data
users.get(
  '/users/me',
  celebrate({
    body: Joi.object().keys({
      user: Joi.object().keys({
        _id: Joi.string().hex().required(),
      }).unknown(true),
    }).unknown(true),
  }),
  getUserById,
);

// Update users
users.patch(
  '/users/me',
  celebrate({
    body: Joi.object().keys({
      user: Joi.object().keys({
        _id: Joi.string().hex().required(),
      }).unknown(true),
      name: Joi.string().min(2).max(40),
      about: Joi.string().min(2).max(200),
    }).unknown(true),
  }),
  updateUser,
);

// Update avatar
users.patch(
  '/users/me/avatar',
  celebrate({
    body: Joi.object().keys({
      user: Joi.object().keys({
        _id: Joi.string().hex().required(),
      }).unknown(true),
      avatar: Joi.string().required().custom(validateUrl),
    }).unknown(true),
  }),
  updateAvatar,
);

module.exports = users;
