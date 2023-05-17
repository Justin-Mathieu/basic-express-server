const { logger } = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();
  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('Logs to the console', () => {
    logger(req, res, next);

    expect(consoleSpy).toHaveBeenCalled();
  });
});