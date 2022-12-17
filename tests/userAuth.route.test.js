const mongoose = require('mongoose');
const request = require('supertest');
const app = require('./../src/app');
const User = require('./../src/api/model/User');
const api = request(app);

describe('User Auth: /signup and /login', () => {
  //beforeAll connect to test DB
  beforeAll(async () => {
    mongoose.connect(process.env.DATABASE_TEST);
  }, 60000);

  //after each transaction, delete data in db
  afterEach(async () => {
    await User.deleteMany();
  });

  //close connection to db
  afterAll(async () => {
    mongoose.connection.close();
  }, 60000);

  it('should sign up a new user', async () => {
    const newUser = {
      firstname: 'John',
      lastname: 'Doe',
      username: 'johndoe',
      email: 'john@example.com',
      password: 'johnpassword',
      passwordConfirm: 'johnpassword',
    };

    const response = await api.post('/api/auth/signup').send(newUser);

    expect(response.status).toBe(201);
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('token');
  }, 100000);

  it('should login a signed up user', async () => {
    await User.create({
      firstname: 'John',
      lastname: 'Doe',
      username: 'johndoe',
      email: 'john@example.com',
      password: 'johnpassword',
      passwordConfirm: 'johnpassword',
    });
    const response = await api.post('/api/auth/login').send({
      email: 'john@example.com',
      password: 'johnpassword',
    });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('success');
    expect(response.body).toHaveProperty('token');
  }, 100000);
});
