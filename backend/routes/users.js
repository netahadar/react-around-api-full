const users = require('express').Router();

const bodyParser = require('body-parser');
const {
  getAllUsers, getUserById, updateUser, updateAvatar,
} = require('../controllers/users');

const jsonParser = bodyParser.json();

// Get full users list
users.get('/users', getAllUsers);

// Get user by id
users.get('/users/:id', getUserById);

// Update users
users.patch('/users/me', jsonParser, updateUser);

// Update avatar
users.patch('/users/me/avatar', jsonParser, updateAvatar);

module.exports = users;
