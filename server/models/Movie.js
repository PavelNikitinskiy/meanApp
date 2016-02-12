var mongoose = require('mongoose');


//MovieSchema
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});
// Export
module.exports = MovieSchema;