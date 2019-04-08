const Joi = require('joi');
const mongoose = require('mongoose');

var personSchema = new Schema(
    {
      first_name: {type: String, required: true, max: 100},
      family_name: {type: String, required: true, max: 100},
      date_of_birth: {type: Date},
      date_of_death: {type: Date}
    }
  );
  
  // Virtual for author's full name
  personSchema
  .virtual('name')
  .get(function () {
    return this.family_name + ', ' + this.first_name;
  });
  
// Virtual for author's URL
personSchema
.virtual('url')
.get(function () {
  return '/sinodik/person/' + this._id;
});

const Person = mongoose.model('Person', personSchema);

function validatePerson(person) {
  const schema = {
    first_name: Joi.string().min(5).max(50).required(),
    family_name: Joi.string().min(5).max(50)
  };

  return Joi.validate(person, schema);
}

exports.Person = Person; 
exports.validate = validatePerson;
