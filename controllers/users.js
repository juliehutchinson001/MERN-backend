const express = require('express');
const User = require('../models/user');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    userId: firstName + lastName,
    email,
    password,
  });

  newUser
    .save()
    .then(() => newUser.generateAuthToken())
    .then(token => res.header('x-auth', token).json({ firstName, lastName }))
    .catch(error => res.status(400).json({ error }));
});

router.get('/me', authenticate, (req, res) => {
  const { firstName, lastName } = req.user;
  res.json({ firstName, lastName });
});

module.exports = router;
