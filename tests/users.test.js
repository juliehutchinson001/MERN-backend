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

describe('GET /api/users', () => {
  beforeEach(done => connectMongoose().then(() => seedUsersToDB(done)));
  afterEach(done => disconnectMongoose(done));

  it('Returns all of the users in the test database', async () => {
    expect.assertions(1);

    const response = await request(app)
      .get('/api/users')
      .set('x-auth', users[0].tokens[0].token);
    expect(response.body.users).toMatchObject([
      {
        _id: users[0]._id.toHexString(),
        firstName: users[0].firstName,
        lastName: users[0].lastName,
        email: users[0].email,
      },
      {
        _id: users[1]._id.toHexString(),
        firstName: users[1].firstName,
        lastName: users[1].lastName,
        email: users[1].email,
      },
    ]);
  });
});

describe('POST /api/users', () => {
  beforeEach(done => connectMongoose().then(() => seedUsersToDB(done)));
  afterEach(done => disconnectMongoose(done));

  it('Creates a user with valid data', async () => {
    expect.assertions(3);

    const response = await request(app)
      .post('/api/users')
      .send(fakeUser);

    expect(response.status).toBe(200);
    expect(response.header).toHaveProperty('x-auth');
    expect(response.body.newUser).toMatchObject({
      firstName: fakeUser.firstName,
      lastName: fakeUser.lastName,
      username: 'fakeuser',
      email: fakeUser.email,
    });
  });

  it('Does not create user with invalid data', async () => {
    expect.assertions(3);

    const response = await request(app)
      .post('/api/users')
      .send({ firstName: 'a' });

    expect(response.status).toBe(400);
    expect(response.header).not.toHaveProperty('x-auth');
    expect(response.body.error.errors.email.kind).toBe('required');
  });

  it('login user with correct email-password', async () => {
    expect.assertions(3);
    const response = await request(app)
      .post('/api/users/login')
      .send({ email: users[0].email, password: users[0].password });

    expect(response.status).toBe(200);
    expect(response.body.username).toBe(users[0].username);
    expect(response.header).toHaveProperty('x-auth');
  });

  it('does not login user with incorrect password', async () => {
    expect.assertions(2);
    const response = await request(app)
      .post('/api/users/login')
      .send({ email: users[0].email, password: `${users[0].password}!` });

    expect(response.status).toBe(401);
    expect(response.body.error).toBe('Password incorrect');
  });

  it('does not login user with incorrect email', async () => {
    expect.assertions(2);
    const response = await request(app)
      .post('/api/users/login')
      .send({ email: `${users[0].email}!`, password: `${users[0].password}` });

    expect(response.status).toBe(404);
    expect(response.body.error).toBe('User does not exist');
  });
});

describe('DELETE /api/users', () => {
  beforeEach(done => connectMongoose().then(() => seedUsersToDB(done)));
  afterEach(done => disconnectMongoose(done));

  it('Logs out a user with valid data', async () => {
    expect.assertions(3);

    const deleteResponse = await request(app)
      .delete('/api/users/me')
      .set('x-auth', users[0].tokens[0].token);

    const privateRouteResponse = await request(app)
      .get('/api/users')
      .set('x-auth', users[0].tokens[0].token);

    expect(deleteResponse.status).toBe(200);
    expect(privateRouteResponse.status).toBe(401);
    expect(deleteResponse.body.message).toBe('you have successfully logged out');
  });
});

/*  it('Basic test works', async () => {
    expect.assertions(1);
    // Async way
    const response = await request(app).get('/api/users/test');
    expect(response.body.msg).toBe('it works');
  });
*/
