'use strict';

function error404(err, req, res, next) {
  res.status(404).send({
    error: 404,
    route: req.path,
    query: req.query,
    message: 'Not Found',
  });

}
module.exports = { error404 };