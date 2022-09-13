// import express
const express = require("express");
// import cors
const cors = require("cors");
// initialize express
const app = express();
// declare port
const PORT = 8000;
// declare database name
const DB = "authors";

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect express to mongodb
require("./config/mongoose.config")(DB);

// connect the routes
require("./routes/author.routes")(app);

// run the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
