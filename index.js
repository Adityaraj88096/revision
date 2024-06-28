require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const topicRouter = require('./routes');
const connectDB = require('./db');
const bodyParser = require('body-parser');
const port = process.env.PORT;

connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('The API setup is working fine so far.');
  });
app.use(topicRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

module.exports = app;