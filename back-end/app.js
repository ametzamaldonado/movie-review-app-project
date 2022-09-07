// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONTROLLER
const reviewController = require("./controllers/reviewController")

// ROUTES
app.use("/reviews", reviewController);

app.get("/", (req, res) => {
    res.send("Hello")
})

//404 
app.get('*', (req, res) => {
    res.status(404).send("error was made")
})

// EXPORT
module.exports = app;