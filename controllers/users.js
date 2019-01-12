const express = require('express');
const { UserSchema } = require('../models/user');
// const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', (request, response) => {
  const { firstName, lastName, email, password } = request.body;

  const newUser = new UserSchema({
    firstName,
    lastName,
    userId: firstName + lastName,
    email,
    password,
  });

  newUser
    .save()
    .then(userNew => response.json({ userNew }))
    .catch(error => response.status(400).json({ error }));
});

// router.get('/me', authenticate, (req, res) => {
//   const { firstName, lastName } = req.user;
//   res.json({ firstName, lastName });
// });

module.exports = router;
