const Joi = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sinodikSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  type: {
    type: String,
    required: true,
    enum: ['о здравии', 'о упокоении']
  },
  persons: [{
    type: Schema.Types.ObjectId,
    ref: 'Person'
  }]
});

// Virtual for author's URL
sinodikSchema
.virtual('url')
.get(function () {
  return '/sinodik/' + this._id;
});

const Sinodik = mongoose.model('Sinodik', sinodikSchema);

function validateSinodik(sinodik) {
  const schema = {
    title: Joi.string().min(5).max(50).required()
  };

  return Joi.validate(sinodik, schema);
}

exports.Sinodik = Sinodik; 
exports.validate = validateSinodik;
