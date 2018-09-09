const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Load alarm Model
require('../models/NavigationButtons');
const NavigationButtons = mongoose.model('navigationButtons');

// Load alarm Model
require('../models/MainMenuText');
const MainMenuText = mongoose.model('mainMenuText');

router.route('/navigationbuttons').get((req, res) => {
  NavigationButtons.find((err, buttons) => {
    console.log(buttons);
    if (err)
      console.log(err);
    else
      res.json(buttons);
  });
});

router.route('/maintext').get((req, res) => {
  MainMenuText.find((err, text) => {
    console.log(text);
    if (err)
      console.log(err);
    else
      res.json(text);
  });
});

module.exports = router;
