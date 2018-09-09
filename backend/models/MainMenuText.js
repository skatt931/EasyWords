const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let MainMenuText = new Schema({
  text: {
    type: String
  }
});

module.exports = mongoose.model('mainMenuText', MainMenuText, 'mainMenuText');
