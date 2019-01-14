const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const userOneId = new mongoose.Types.ObjectId();
const userTwoId = new mongoose.Types.ObjectId();

// Fake users to seed into testing database
const users = [
  {
    _id: userOneId,
    firstName: 'juan',
    lastName: 'hurtado',
    username: 'juanhurtado',
    email: 'juan@test.com',
    password: 'juanisawesome',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userOneId._id, access: 'auth' }, process.env.JWT_SECRET).toString(),
      },
    ],
  },
  {
    _id: userTwoId,
    firstName: 'julie',
    lastName: 'hutchinson',
    username: 'juliehurtado',
    email: 'julie@test.com',
    password: 'julieisawesome',
    tokens: [
      {
        access: 'auth',
        token: jwt.sign({ _id: userTwoId._id, access: 'auth' }, process.env.JWT_SECRET).toString(),
      },
    ],
  },
];

const seedUsersToDB = async done => {
  await User.remove({});
  await new User(users[0]).save();
  await new User(users[1]).save();

  done();
};

module.exports = { users, seedUsersToDB };
