'use strict';
function error500(err, req, res, next) {
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    message: `server error: ${err.message}`,
  });
}

module.exports = {error500};
