const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/LearningMongodb';
mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true }
);
