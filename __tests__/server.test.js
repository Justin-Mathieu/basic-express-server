const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('server', () => {
  it('person route', async () => {
    const response = await request.get('/person/bob');
    expect(response.status).toBe(200);
  });

  it('bad route', async () => {
    const response = await request.get('/thing');
    expect(response.status).toBe(404);

  });



});