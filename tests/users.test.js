const request = require('supertest');
const app = require('../app');
const { connectMongoose, disconnectMongoose } = require('../db/mongoose');
const { users, seedUsersToDB } = require('./seed');

const fakeUser = {
  firstName: 'fake',
  lastName: 'user',
  email: 'fake@test.com',
  password: 'fakeuserpassword',
};



/*  it('Basic test works', async () => {
    expect.assertions(1);
    // Async way
    const response = await request(app).get('/api/users/test');
    expect(response.body.msg).toBe('it works');
  });
*/
