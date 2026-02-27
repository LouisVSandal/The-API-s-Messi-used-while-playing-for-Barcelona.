const request = require('supertest');
const app = require('../src/index');

describe('Auth API', () => {
  describe('POST /api/auth/register', () => {
    it('should return 400 if email is missing', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ username: 'testuser', password: 'Test1234' });
      expect(res.statusCode).toBe(400);
    });

    it('should return 400 if password is too short', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ username: 'testuser', email: 'test@test.com', password: '123' });
      expect(res.statusCode).toBe(400);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should return 400 if email is invalid', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'notanemail', password: 'Test1234' });
      expect(res.statusCode).toBe(400);
    });
  });

  describe('GET /api/auth/me', () => {
    it('should return 401 if no token provided', async () => {
      const res = await request(app).get('/api/auth/me');
      expect(res.statusCode).toBe(401);
    });
  });
});
