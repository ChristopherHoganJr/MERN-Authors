// import mongoose library
const mongoose = require("mongoose");

// export arrow function to server.js
module.exports = (DB) => {
  mongoose
    .connect(`mongodb://localhost/${DB}`)
    .then(() => console.log(`connected to ${DB}`))
    .catch((err) => console.log(`cannot connect to ${DB}`));
};
