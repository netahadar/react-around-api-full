const Card = require('../models/card');
const NotFoundError = require('../errors/notFoundError');
const BadRequestError = require('../errors/badRequestError');

// Get all cards data
module.exports.getAllCards = (req, res, next) => {
  Card.find({})
    .then((cardsData) => {
      if (!cardsData) {
        throw new NotFoundError('No cards to display');
      }
      res.status(200).send(cardsData);
    })
    .catch(next);
};

// Create a new card
module.exports.createCard = (req, res, next) => {
  const { name, link, owner = req.user._id } = req.body;
  Card.create({ name, link, owner })
    .then((card) => {
      if (!card) {
        throw new BadRequestError('Bad request');
      }
      res.status(200).send({ message: 'card created successfully' });
    })
    .catch(next);
};

// Delete card
module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  Card.findById(cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('No card with matching id found');
      }
      if (!card.owner._id.equals(req.user._id)) {
        throw new Error('Access to the requested resource is forbidden');
      }
      Card.deleteOne({ card })
        .then(() => {
          res.status(200).send('card has been deleted successfully');
        });
    })
    .catch((err) => {
      if (err.name === 'Error') {
        res.status(403).send({ message: `${err.message}` });
      }
      if (err.name === 'CastError') {
        throw new BadRequestError('Bad request');
      }
      next(err);
    })
    .catch(next);
};

// Like card
module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('No card with matching id found');
      }
      res.status(200).send(card.likes);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Bad request');
      }
      next(err);
    })
    .catch(next);
};

// Dislike card
module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError('No card with matching id found');
      }
      res.status(200).send(card.likes);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Bad request');
      }
      next(err);
    })
    .catch(next);
};
