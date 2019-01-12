const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  userId: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 2,
    trim: true,
    unique: true,
  },
});

// UserSchema.methods.generateAuthToken = function generateAuthToken() {
//   const access = 'auth';
//   const token = jwt.sign({ _id: this._id.toHexString(), access }, 'secret').toString();
// };

// module.exports = { UserSchema };
module.exports = { UserSchema: mongoose.model('users', UserSchema) };
