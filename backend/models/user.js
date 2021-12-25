/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Jacques Cousteau',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Explorer',
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return /(http:\/\/|https:\/\/)[www\.]?[a-zA-z0-9.]+\/?#?/i.test(v);
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
    default: 'https://pictures.s3.yandex.net/resources/avatar_1604080799.jpg',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return /[a-z0-9\.]+@[a-z]+\.[a-z]{2,3}[\.a-z]*/i.test(v);
      },
      message: (props) => `${props.value} is not a valid email adress!`,
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /[a-z0-9!@#$%,&\^\*\(\)\.\+\\\{\}\-]+/i.test(v);
      },
      message: (props) => `${props.value} is not a valid password!`,
    },
  },
});

userSchema.statics.findUserByCredentials = function findUserByCredentials(email, password) {
  return this.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Incorrect email or password'));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Incorrect email or password'));
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
