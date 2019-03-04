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

UserSchema.methods.generateAuthToken = async function generateAuthToken() {
  const access = 'auth';
  const token = jwt
    .sign({ _id: this._id.toHexString(), access }, process.env.JWT_SECRET)
    .toString();

  this.tokens = [...this.tokens, { access, token }];
  await this.save();
  return token;
};


module.exports = { User: mongoose.model('users', UserSchema) };
