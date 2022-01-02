const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors, celebrate, Joi } = require('celebrate');
const cards = require('./routes/cards');
const users = require('./routes/users');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const { errorHandler } = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
require('dotenv').config();

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/aroundb');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());

app.use(requestLogger);
// Celebrate error handler
app.use(errors());

// Test server crash
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
});

app.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().alphanum().required(),
      password: Joi.string().required().min(3).max(12),
    }),
  }),
  login,
);
app.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required().min(3).max(12),
    }),
  }),
  createUser,
);
app.use('/', auth, users);
app.use('/', auth, cards);

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Page Not Found' });
});

app.use(errorLogger);

// Centralized error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
