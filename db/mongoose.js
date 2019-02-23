const mongoose = require('mongoose');

/** Mongo Configuration */
module.exports = {
  connectMongoose() {
    return mongoose
      .connect(
        process.env.MONGODB_URI,
        { useNewUrlParser: true }
      )
      .then(() => console.log('Mongoose Connected'))
      .catch(error => console.log(`There was an error connecting with mongoose: ${error}`));
  },
  disconnectMongoose(done) {
    mongoose.disconnect(done);
  },
};
