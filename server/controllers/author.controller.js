// import model
const Author = require("../models/author.model");

module.exports = {
  findAll: (req, res) => {
    Author.find()
      .then((allAuthors) => res.json(allAuthors))
      .catch((err) => res.status(400).json(err));
  },

  create: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) =>
        res.json({ message: "created", newAuthor, status: 200 })
      )
      .catch((err) => res.status(400).json(err));
  },

  findOne: (req, res) => {
    Author.findById(req.params.id)
      .then((oneAuthor) => res.json(oneAuthor))
      .catch((err) => res.status(400).json(err));
  },

  update: (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedAuthor) => res.json(updatedAuthor))
      .catch((err) => res.status(400).json(err));
  },

  delete: (req, res) => {
    Author.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
};
