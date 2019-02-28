const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models/user');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/', async (request, response) => {
  const { firstName, lastName, email, password } = request.body;
  const username = firstName + lastName;

  const newUser = new User({
    firstName,
    lastName,
    username,
    email,
    password,
  });

  try {
    await newUser.save();
    const token = await newUser.generateAuthToken();
    response.header('x-auth', token).json({
      // TODO: remove newUser key, just send back the object (here, and test)
      newUser: {
        _id: newUser._id,
        firstName,
        lastName,
        username,
        email,
      },
    });
  } catch (error) {
    response.status(400).json({ error });
  }
});

router.get('/', authenticate, (request, response) => {
  User.find({})
    .then(users => response.json({ users }))
    .catch(error => response.status(400).json({ error }));
});

router.get('/test', (request, response) => {
  response.json({ msg: 'it works' });
});

router.post('/login', async (request, response) => {
  const { email, password } = request.body;
  try {
    // use var to have access outside of try block while being able to catch error
    var user = await User.findOne({ email }); // eslint-disable-line no-var, vars-on-top

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect) {
      const token = await user.generateAuthToken();
      response.header('x-auth', token).json({ username: user.username });
    } else {
      response.status(401).json({ error: 'Password incorrect' });
    }
  } catch (error) {
    // eslint-disable-next-line block-scoped-var
    if (!user) {
      return response.status(404).json({ error: 'User does not exist' });
    }
    response.status(400).json({ error });
  }
});

router.delete('/me', authenticate, async (request, response) => {
  const { token } = request;

  try {
    await request.user.update({
      $pull: { tokens: { token } },
    });
    response.json({ message: 'you have successfully logged out' });
  } catch (error) {
    response.status(400).json({ error });
  }
});

module.exports = router;

// bcrypt.compare(pass1, pass2).then(isCorrect)

// const isCorrect = await bcrypt.compare(pass1, pass2);

// someLibrary.saveMessage(message).then(() => redirectHome())

// await someLibrary.saveMessage() // return void
// redirectHome()
