const Card = require('../models/card');
const {
  NOTFOUND_ERROR_CODE,
  INVALIDDATA_ERROR_CODE,
  DEFAULT_ERROR_CODE,
  createNotFoundError,
} = require('../constants/constants');

// Get all cards data
module.exports.getAllCards = (req, res) => {
  Card.find({})
    .orFail(createNotFoundError)
    .then((cardsData) => {
      res.status(200).send(JSON.parse(cardsData));
    })
    .catch((err) => {
      if (err.name === 'Not Found') {
        res.status(NOTFOUND_ERROR_CODE).send({ message: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ message: `${err.message}` });
    });
};

// Create a new card
module.exports.createCard = (req, res) => {
  const { name, link, owner = req.user._id } = req.body;
  Card.create({ name, link, owner })
    .then(() => {
      res.status(200).send({ message: 'card created successfully' });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(INVALIDDATA_ERROR_CODE).send({ messege: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ messege: `${err.message}` });
    });
};

// Delete card
module.exports.deleteCard = (req, res) => {
  const { cardId } = req.params;
  if (req.owner._id !== req.user._id) {
    throw new Error('Access to the requested resource is forbidden');
  }
  Card.deleteOne(cardId)
    .orFail(createNotFoundError)
    .then(() => {
      res.status(200).send('card has been deleted successfully');
    })
    .catch((err) => {
      if (err.name === 'Unauthorized') {
        res.status(403).send({ message: `${err.message}` });
      }
      if (err.name === 'CastError') {
        res.status(INVALIDDATA_ERROR_CODE).send({ message: `${err.message}` });
      }
      if (err.name === 'Not Found') {
        res.status(NOTFOUND_ERROR_CODE).send({ message: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ message: `${err.message}` });
    });
};

// Like card
module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(createNotFoundError)
    .then((card) => {
      res.status(200).send(card.likes);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(INVALIDDATA_ERROR_CODE).send({ message: `${err.message}` });
        return;
      } if (err.name === 'Not Found') {
        res.status(NOTFOUND_ERROR_CODE).send({ message: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ message: `${err.message}` });
    });
};

// Dislike card
module.exports.dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(createNotFoundError)
    .then((card) => {
      res.status(200).send(card.likes);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(INVALIDDATA_ERROR_CODE).send({ message: `${err.message}` });
        return;
      } if (err.name === 'Not Found') {
        res.status(NOTFOUND_ERROR_CODE).send({ message: `${err.message}` });
        return;
      }
      res.status(DEFAULT_ERROR_CODE).send({ message: `${err.message}` });
    });
};
