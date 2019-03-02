const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
  username: {
    type: String,
    required: true,
    minlength: 2,
    unique: true,
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
  },
  tokens: [
    {
      access: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

UserSchema.pre('save', function hashPasswordBeforeSave(next) {
  if (this.isModified('password')) {
    bcrypt.genSalt((saltError, salt) => {
      if (saltError) {
        return Promise.reject();
      }
      bcrypt.hash(this.password, salt, (hashError, hash) => {
        if (hashError) {
          return Promise.reject();
        }
        this.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});


module.exports = { User: mongoose.model('users', UserSchema) };
