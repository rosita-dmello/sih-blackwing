// Importing modules
const express = require("express");
const cors = require("cors");
const db = require("./connection");

// Initializing an express app
const app = express();

// Server Port
const PORT = process.env.PORT || 5000;

// Formatting incoming data and allowing cross origin requests
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listening on the port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
