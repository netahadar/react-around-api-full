const cards = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getAllCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');
const { validateUrl } = require('../middlewares/linkValidation');

// Get full cards list
cards.get('/cards', getAllCards);

// Create a new card
cards.post(
  '/cards',
  celebrate({
    body: Joi.object()
      .keys({
        name: Joi.string().required().min(1).max(30),
        link: Joi.string().required().custom(validateUrl),
        user: Joi.object().keys({
          _id: Joi.string().hex().required(),
        }).unknown(true),
      })
      .unknown(true),
  }),
  createCard,
);

// Delete a card
cards.delete(
  '/cards/:cardId',
  celebrate({
    body: Joi.object().keys({
      user: Joi.object().keys({
        _id: Joi.string().hex().required(),
      }).unknown(true),
    }).unknown(true),
    params: Joi.object()
      .keys({
        cardId: Joi.string().hex().required(),
      })
      .unknown(true),
  }),
  deleteCard,
);

// Add like to card
cards.put(
  '/cards/:cardId/likes',
  celebrate({
    body: Joi.object().keys({
      user: Joi.object().keys({
        _id: Joi.string().hex().required(),
      }).unknown(true),
    }).unknown(true),
    params: Joi.object()
      .keys({
        cardId: Joi.string().hex().required(),
      })
      .unknown(true),
  }),
  likeCard,
);

// Dislike card
cards.delete(
  '/cards/:cardId/likes',
  celebrate({
    body: Joi.object().keys({
      user: Joi.object().keys({
        _id: Joi.string().hex().required(),
      }).unknown(true),
    }).unknown(true),
    params: Joi.object()
      .keys({
        cardId: Joi.string().hex().required(),
      })
      .unknown(true),
  }),
  dislikeCard,
);

module.exports = cards;
