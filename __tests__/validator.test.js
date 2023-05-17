const { validator } = require('../src/middleware/validator');
const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('validator middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn();

  it('validates query', async () => {
    let response = await request.get('/person/bob');
    expect(response.status).toBe(200);
  });

  it('validates query', () => {
    req = { params: {} };
    validator(req, res, next);
    expect(next).toHaveBeenCalledWith('no name parameter');

  });
});