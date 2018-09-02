const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NavigationButtons = new Schema({
  btnName: {
    type: String
  },
  btnUrl: {
    type: String
  }
});

module.exports = mongoose.model('navigationButtons', NavigationButtons, 'navigationButtons');
