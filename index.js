// Importing modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require("./utilities/connection");

// Initializing an express app
const app = express();

// Server Port
const PORT = process.env.PORT;

// Formatting incoming data and allowing cross origin requests
app.use(cors({origin: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging incoming requests
app.use(morgan('dev'));

// Test API
app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Listening on the port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});