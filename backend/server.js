const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const issues = require('./routes/issues');
const mainMenu = require('./routes/mainMenu');

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/Issues');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully!');
});

// Point static path to public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/user', express.static(path.join(__dirname, 'public')));

app.use('/issues', issues);
app.use('/mainmenu', mainMenu);

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
