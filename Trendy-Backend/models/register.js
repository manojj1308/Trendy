const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
},
Dob: {
  type: String,
  required: true
},
location: {
  type: String,
  required: true
},
})
module.exports = register = mongoose.model('register', UserSchema)