const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';
const header = { useNewUrlParser: true };

MongoClient.connect(
  url,
  header,
  (err, client) => {
    if (err) {
      return console.log(`Couldn't connect to db`);
    }

    console.log('Connected to mongodb');

    const db = client.db('TodoApp');

    db.collection('Users').insertOne(
      {
        firstName: 'Juan',
        lastName: 'Hurtado',
        age: 27,
        email: 'juanhurtado4@outlook.com',
        date: new Date(),
      },
      (error, result) => {
        if (error) {
          console.log('could not insert new user');
        } else {
          console.log(JSON.stringify(result, null, 3));
        }
      }
    );
    client.close();
  }
);

MongoClient.connect(
  url,
  header,
  (err, client) => {
    if (err) {
      return console.log('unable to connect to db');
    }
    console.log('connection successful');

    const db = client.db('TodoApp');

    db.collection('Users')
      .findOneAndUpdate(
        { _id: new ObjectID('5c37b27f3966cc7fa84fc221') },
        {
          $rename: { name: 'firstName' },
          $set: {
            firstName: 'Julie',
            lastName: 'Hutchinson',
          },
        },
        { returnOriginal: false }
      )
      .then(result => {
        console.log(result);
      });
    client.close();
  }
);
