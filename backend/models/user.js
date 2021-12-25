/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /(http:\/\/|https:\/\/)[www\.]?[a-zA-z0-9.]+\/?#?/i.test(v);
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return /[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}[\.a-z]*/i.test(v);
      },
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /[a-z0-9!@#$%,&\^\*\(\)\.\+\\\{\}\-]+/i.test(v);
      },
    },
  },
});

module.exports = mongoose.model('user', userSchema);
