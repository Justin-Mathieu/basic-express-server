function validator(req, res, next) {
  if (req.params.name) {
    res.status(200).send({ name: req.params.name });
    next();
  } else {
    next('no name parameter');
  }

}

module.exports = { validator };