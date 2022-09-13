// import model
const Author = require("../models/author.model");

module.exports = {
  findAll: (req, res) => {
    Author.find()
      .then((allAuthors) => res.json(allAuthors))
      .catch((err) => res.json(err));
  },

  create: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) =>
        res.json({ message: "created", newAuthor, status: 200 })
      )
      .catch((err) => res.json(err));
  },

  findOne: (req, res) => {
    Author.findById(req.params.id)
      .then((oneAuthor) => res.json(oneAuthor))
      .catch((err) => res.json(err));
  },

  update: (req, res) => {
    Author.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidations: true,
    })
      .then((updatedAuthor) => res.json(updatedAuthor))
      .catch((err) => res.json(err));
  },

  delete: (req, res) => {
    Author.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
};
