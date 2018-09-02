const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

  // Load alarm Model
  require('../models/NavigationButtons');
  const NavigationButtons = mongoose.model('navigationButtons');

  router.route('/').get((req, res) => {
    NavigationButtons.find((err, buttons) => {
      console.log(buttons);
      if (err)
        console.log(err);
      else
        res.json(buttons);
    });
  });

  // router.get('/', (req, res) => {
  //   NavigationButtons.find()
  //     .then(buttons => {
  //       console.log(buttons);
  //       if (buttons) {
  //         return res.send(buttons);
  //       } else {
  //         return res.send([]);
  //       }
  //     }, err => {
  //       console.log("Error: " + err);
  //       return err.status(500).json();
  //     });

  // });

 module.exports = router;
