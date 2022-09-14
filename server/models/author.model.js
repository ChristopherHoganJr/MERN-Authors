// import mongoose
const mongoose = require("mongoose");
// declare Schema
const AuthorSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "must enter an author's {PATH}."],
      minlength: [3, "{PATH} must be at least 3 characters"],
    },
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
